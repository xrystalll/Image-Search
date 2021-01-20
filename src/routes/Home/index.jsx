import { useState } from 'react';
import Layout from 'components/Layout';
import TextInput from 'components/TextInput';
import FileInput from 'components/FileInput';
import RadioGroup from 'components/RadioGroup';
import Button from 'components/Button';
import Loader from 'components/Loader';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import VideoThumbnail from 'react-video-thumbnail';

const Home = () => {
  document.title = 'Image search'

  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState('')
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')

  const engines = [{
    id: 1,
    name: 'Google',
    url: 'https://www.google.com/searchbyimage?image_url='
  }, {
    id: 2,
    name: 'Yandex',
    url: 'https://yandex.com/images/search?rpt=imageview&url='
  }]
  const [engine, setEngine] = useState(engines[0])

  const apiUrl = 'https://api.imgur.com/3/image'
  const clientId = 'f1f9224726db6dd'

  const videoTypes = ['video/mp4', 'video/webm']

  const chooseHandler = ({ target }) => {
    error && setError('')
    uploaded && setUploaded('')

    const selectedFile = target.files?.item(0)

    if (videoTypes.find(i => i === selectedFile.type)) {
      ready && setReady(false)
    } else {
      setReady(true)
    }

    setFile(selectedFile)
  }

  const linkHandler = ({ target }) => {
    error && setError('')
    uploaded && setUploaded('')
    target.value.length > 0 ? setReady(true) : setReady(false)

    setUploaded(target.value)
  }

  const engineHandler = ({ target }) => {
    setEngine(engines.filter(i => i.id === target.value * 1 )[0])
  }

  const uploadClick = () => {
    if (file) {
      setUploading(true)
      upload(file)
    } else {
      setUploading(false)
      setError('Select a file!')
    }
  }

  const upload = (file) => {
    const headers = new Headers()
    headers.append('Authorization', 'Client-ID ' + clientId)

    const formdata = new FormData()
    formdata.append('image', file)

    const options = {
      method: 'POST',
      headers,
      body: formdata
    }

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(({ data, success }) => {
        if (!success) throw Error

        setUploading(false)
        setUploaded(data.link)

        search(data.link)
      })
      .catch(error => {
        setError('Error. File not uploaded')
        setUploading(false)
        setUploaded('')
        setFile(null)
      })
  }

  const searchClick = () => {
    search(uploaded)
  }

  const search = (fileUrl) => {
    const win = window.open(engine.url + fileUrl, '_blank')
    win.focus()
  }

  const thumbnailHandler = (data) => {
    setReady(true)
    setFile(dataURLtoFile(data))
  }

  const dataURLtoFile = (dataurl) => {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length 
    const u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new File([u8arr], 'image.' + mime.split('/')[1], { type: mime })
  }

  return (
    <Layout title="Search by image or video">
      <Tabs>
        <TabList>
          <Tab>Upload file</Tab>
          <Tab>Paste link</Tab>
        </TabList>

        <TabPanel>
          <FileInput onChange={chooseHandler}>
            {!error
              ? file ? file.name : 'Select image or video'
              : error
            }
          </FileInput>
        </TabPanel>

        <TabPanel>
          <TextInput onChange={linkHandler} hint={'Paste link to image'} />
        </TabPanel>
      </Tabs>

      <RadioGroup name="engine" data={engines} state={engine} onChange={engineHandler} />

      {!uploaded
        ? <Button className={!ready && 'main disable'} onClick={uploadClick}>{uploading ? <Loader /> : 'Upload and find'}</Button>
        : <Button className={!ready && 'main disable'} onClick={searchClick}>Find</Button>
      }

      {file && videoTypes.find(i => i === file.type) && (
        <VideoThumbnail
          videoUrl={URL.createObjectURL(file)}
          thumbnailHandler={thumbnailHandler}
          snapshotAtTime={2}
          renderThumbnail={false}
        />
      )}
    </Layout>
  )
}

export default Home;
