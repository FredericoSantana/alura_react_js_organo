import './Form.css';
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import {useState} from "react";

const Form = ({teamNames, aoColaboradorCadastrado, registerTeam}) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    aoColaboradorCadastrado({
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
    <section className="form-container">
      <form className="form" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input valor={name} onChanged={valor => setName(valor)}
               required={true} label="Nome" placeholder="Digite seu nome"/>
        <Input valor={role} onChanged={valor => setRole(valor)}
               required={true} label="Cargo" placeholder="Digite seu cargo"/>
        <Input valor={image} onChanged={valor => setImage(valor)}
               label="Imagem" placeholder="Digite o endereço da imagem"/>
        <Select valor={team} onChanged={valor => setTeam(valor)}
                required={true} label="Time" itens={teamNames}/>
        <Button>
          Criar card
        </Button>
      </form>
      <form className="form" onSubmit={(event) => {
        event.preventDefault()
        registerTeam({name: teamName, color: teamColor})
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Input valor={teamName} onChanged={valor => setTeamName(valor)}
               required label="Nome" placeholder="Digite o nome do time"/>
        <Input type='color' valor={teamColor} onChanged={valor => setTeamColor(valor)}
               required label="Cor" placeholder="Digite a cor do time"/>
        <Button>
          Criar time
        </Button>
      </form>
    </section>
  );
}

export default Form;