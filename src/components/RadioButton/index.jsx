import './style.css';

const RadioButton = ({ name, data, state }) => {
  return (
    <div className="radio_item">
      <input id={name + '_' + data.id} type="radio" name={name} value={data.id} defaultChecked={state.id === data.id} />
      <label htmlFor={name + '_' + data.id}>{data.name}</label>
    </div>
  )
}

export default RadioButton;
