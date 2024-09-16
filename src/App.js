import Banner from "./components/Banner";
import Form from "./components/Form";
import {useEffect, useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/teams')
      .then(response => response.json())
      .then(data => {
        setTeams(data)
      })
  }, [])

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data)
      })
  }, [])

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
  
  function solveFavourite(id) {
    setEmployees(employees.map(employee => {
      if (employee.id === id) employee.favourite = !employee.favourite;
      return employee;
    }))
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
          onFavourite={solveFavourite}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
