import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ];

  const [employees, setEmployees] = useState([]);
  const aoNovoColaboradorAdicionado = (employee) => {
    setEmployees([...employees, employee]);
  };
  return (
    <div className="App">
      <Banner/>
      <Form teamNames={teams.map(team => team.name)} aoColaboradorCadastrado={employees => aoNovoColaboradorAdicionado(employees)}/>
      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        employees={employees.filter(employee => employee.time === team.name)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
