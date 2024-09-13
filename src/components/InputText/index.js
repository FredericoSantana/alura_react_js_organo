import './InputText.css';

const InputText = (props) => {

  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value);
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitar} required={props.required} type="text" placeholder={props.placeholder}/>
    </div>
  );
};

export default InputText;