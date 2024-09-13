import './Form.css';
import InputText from "../InputText";
import Select from "../Select";
import Button from "../Button";
import {useState} from "react";

const Form = (props) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.aoColaboradorCadastrado({
      name,
      role,
      image,
      team
    })
    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }
  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText valor={name} aoAlterado={valor => setName(valor)}
                   required={true} label="Nome" placeholder="Digite seu nome"/>
        <InputText valor={role} aoAlterado={valor => setRole(valor)}
                   required={true} label="Cargo" placeholder="Digite seu cargo"/>
        <InputText valor={image} aoAlterado={valor => setImage(valor)}
                   label="Imagem" placeholder="Digite o endereço da imagem"/>
        <Select valor={team} aoAlterado={valor => setTeam(valor)}
                required={true} label="Time" itens={props.teamNames}/>
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  );
}

export default Form;