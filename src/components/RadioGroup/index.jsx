import RadioButton from 'components/RadioButton';
import './style.css';

const RadioGroup = ({ name, data, state, onChange }) => {
  return (
    <form onChange={onChange} className="radio_group">
      {data.map(item => (
        <RadioButton key={item.id} name={name} data={item} state={state} />
      ))}
    </form>
  )
}

export default RadioGroup;
