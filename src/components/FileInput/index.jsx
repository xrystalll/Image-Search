import Button from 'components/Button';
import './style.css';

const FileInput = ({ onChange, children }) => {
  return (
    <div className="file_area">
      <input id="fileInput" type="file" onChange={onChange} className="none" />
      <label htmlFor="fileInput" className="file_input" title="Choose file">
        <Button>Choose</Button>
        <span>
          {children || 'File not selected'}
        </span>
      </label>
    </div>
  )
}

export default FileInput;
