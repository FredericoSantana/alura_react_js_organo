import './Select.css'

const Select = ({label, required, itens, valor, onChanged}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select onChange={evento => onChanged(evento.target.value)} required={required} value={valor}>
        <option>Selecione um Time</option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default Select;