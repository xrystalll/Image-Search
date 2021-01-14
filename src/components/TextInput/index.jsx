import './style.css';

const TextInput = ({ onChange, hint }) => {
  return (
    <input type="text" onChange={onChange} className="text_input" placeholder={hint || 'Type something...'} />
  )
}

export default TextInput;
