import './style.css';

const RadioGroup = ({ data, state, onChange }) => {
  return (
    <form onChange={onChange} className="radio_group">
      <label>
        <input type="radio" name="engine" value={data[0]} defaultChecked={state === data[0]} />
        {data[0]}
      </label>

      <label>
        <input type="radio" name="engine" value={data[1]} defaultChecked={state === data[1]} />
        {data[1]}
      </label>
    </form>
  )
}

export default RadioGroup;
