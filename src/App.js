import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ]);

  const initial = [
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [employees, setEmployees] = useState(initial)
  const aoNovoColaboradorAdicionado = (employee) => {
    setEmployees([...employees, employee]);
  };

  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team;
    }))
  }

  function registerTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teamNames={teams.map(team => team.name)}
            aoColaboradorCadastrado={employees => aoNovoColaboradorAdicionado(employees)}
            registerTeam={registerTeam}
      />
      {teams.map(team => <Team
          key={team.id}
          team={team}
          employees={employees.filter(employee => employee.team === team.name)}
          onDelete={deleteEmployee}
          changeColor={changeTeamColor}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
