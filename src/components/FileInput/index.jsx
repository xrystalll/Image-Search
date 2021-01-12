import { Fragment } from 'react';
import Button from 'components/Button';
import './style.css';

const FileInput = ({ onChange, children }) => {
  return (
    <Fragment>
      <input type="file" onChange={onChange} id="fileInput" className="none" />
      <label htmlFor="fileInput" className="file_input" title="Upload file">
        <Button>Choose</Button>
        {children || 'File not selected'}
      </label>
    </Fragment>
  )
}

export default FileInput;
