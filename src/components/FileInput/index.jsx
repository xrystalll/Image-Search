import { Fragment } from 'react';
import Button from 'components/Button';
import './style.css';

const FileInput = ({ onChange, children }) => {
  return (
    <Fragment>
      <input id="fileInput" type="file" onChange={onChange} className="none" />
      <label htmlFor="fileInput" className="file_input" title="Upload file">
        <Button>Choose</Button>
        <span>
          {children || 'File not selected'}
        </span>
      </label>
    </Fragment>
  )
}

export default FileInput;
