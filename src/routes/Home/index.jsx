import { useState } from 'react';
import Layout from 'components/Layout';
import FileInput from 'components/FileInput';
import RadioGroup from 'components/RadioGroup';
import Button from 'components/Button';
import Loader from 'components/Loader';
// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import './style.css';

const Home = () => {
  document.title = 'Image Search'

  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState('')
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

  // const ffmpeg = createFFmpeg({ log: true })
  const videoTypes = ['video/mp4', 'video/webm']

  const chooseHandler = (e) => {
    error && setError('')
    setUploaded('')
    setFile(e.target.files?.item(0))
  }

  const uploadClick = () => {
    if (file) {
      setUploading(true)
      upload(file)
      // !videoTypes.find(i => i === file.type) ? upload(file) : convertToImage(file)
    } else {
      setUploading(false)
      setError('Select a file!')
    }
  }

  const searchClick = () => {
    search(uploaded)
  }

  const engineHandler = ({ target }) => {
    setEngine(engines.filter(i => i.id === target.value * 1 )[0])
  }

  const upload = (file) => {
    const headers = new Headers()
    headers.append('Authorization', 'Client-ID ' + clientId)

    const formdata = new FormData()
    if (videoTypes.find(i => i === file.type)) {
      setError('Error. Allowed only images')
      setUploading(false)
      setUploaded('')
      setFile(null)
      return
    } else {
      formdata.append('image', file)
    }

    const options = {
      method: 'POST',
      headers,
      body: formdata
    }

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(({ data, success }) => {
        if (!success && !data.link) throw Error

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

  // const convertToImage = async (file) => {
  //   await ffmpeg.load()
  //   ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(file))
  //   await ffmpeg.run('-i', 'video.mp4', '-ss', '00:00:01.000', '-vframes', '1', '-f', 'jpeg', 'image.jpg')
  //   const data = ffmpeg.FS('readFile', 'image.jpg')
  //   const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/jpeg' }))
  //   upload(url)
  // }

  const search = (fileUrl) => {
    const win = window.open(engine.url + fileUrl, '_blank')
    win.focus()
  }

  return (
    <Layout>
      <FileInput onChange={chooseHandler}>
        {!error
          ? file ? file.name : 'Select an image'
          : error
        }
      </FileInput>

      <RadioGroup data={engines} state={engine} onChange={engineHandler} />

      {!uploaded
        ? <Button onClick={uploadClick}>{uploading ? <Loader /> : 'Upload and find'}</Button>
        : <Button onClick={searchClick}>Find</Button>
      }
    </Layout>
  )
}

export default Home;
