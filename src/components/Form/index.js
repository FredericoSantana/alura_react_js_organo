import './Form.css';
import InputText from "../InputText";
import Select from "../Select";
import Button from "../Button";
import {useState} from "react";

const Form = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [image, setImage] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      image,
      time
    })
    setNome('')
    setCargo('')
    setImage('')
    setTime('')
  }
  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText valor={nome} aoAlterado={valor => setNome(valor)}
                   required={true} label="Nome" placeholder="Digite seu nome"/>
        <InputText valor={cargo} aoAlterado={valor => setCargo(valor)}
                   required={true} label="Cargo" placeholder="Digite seu cargo"/>
        <InputText valor={image} aoAlterado={valor => setImage(valor)}
                   label="Imagem" placeholder="Digite o endereço da imagem"/>
        <Select valor={time} aoAlterado={valor => setTime(valor)}
                required={true} label="Time" itens={props.teamNames}/>
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  );
}

export default Form;