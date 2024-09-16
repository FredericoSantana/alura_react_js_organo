import './Input.css';

const Input = ({type = 'text', label, onChanged, placeholder, valor, required = false}) => {

  const onDigit = (event) => {
    onChanged(event.target.value);
  }
  return (
    <div className={`input input-${type}ed`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={onDigit}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;