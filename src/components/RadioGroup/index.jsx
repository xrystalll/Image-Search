import './style.css';

const RadioGroup = ({ data, state, onChange }) => {
  return (
    <form onChange={onChange} className="radio_group">
      {data.map(item => (
        <div className="radio_item" key={item.id}>
          <input id={'engine_' + item.id} type="radio" name="engine" value={item.id} defaultChecked={state.id === item.id} />
          <label htmlFor={'engine_' + item.id}>{item.name}</label>
        </div>
      ))}
    </form>
  )
}

export default RadioGroup;
