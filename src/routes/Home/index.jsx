import { useState } from 'react';
import Layout from 'components/Layout';
import FileInput from 'components/FileInput';
import RadioGroup from 'components/RadioGroup';
import Button from 'components/Button';
import { Loader } from 'components/Loader';
import './style.css';

const Home = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState('')
  const [error, setError] = useState('')

  const engines = ['Google', 'Yandex']
  const [engine, setEngine] = useState(engines[0])

  const apiUrl = 'https://api.imgur.com/3/image'
  const clientId = 'f1f9224726db6dd'
  const google = 'https://www.google.com/searchbyimage?image_url='
  const yandex = 'https://yandex.com/images/search?rpt=imageview&url='

  const chooseHandler = (e) => {
    error && setError('')
    setUploaded('')
    setFile(e.target.files[0])
  }

  const uploadClick = () => {
    if (file) {
      setUploading(true)
      upload(file)
    } else {
      setError('Select a file!')
    }
  }

  const searchClick = () => {
    search(uploaded)
  }

  const engineHandler = (e) => {
    setEngine(e.target.value)
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

  const search = (fileUrl) => {
    const searcUrl = engine === engines[0] ? google + fileUrl : yandex + fileUrl
    const win = window.open(searcUrl, '_blank')
    win.focus()
  }

  return (
    <Layout>
      <FileInput onChange={chooseHandler}>
        <span>
          {!error
            ? file ? file.name : 'Select image or video'
            : error
          }
        </span>
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
