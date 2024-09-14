import './Team.css';
import Employee from "../Employee";
import hexToRgba from "hex-to-rgba";

const Team = ({ team, employees, onDelete, changeColor}) => {
  const css = { backgroundColor: hexToRgba(team.color, '0.6'), backgroundImage: 'url(/images/fundo.png)' };
  return (
    (employees.length > 0) &&
    <section className="team" style={css}>
      <input onChange={event => changeColor(event.target.value, team.id)} value={team.color} type='color' className='input-color'/>
      <h3 style={{borderColor: team.color}}>
        {team.name}
      </h3>
      <div className="employees">
        {employees.map((employee, index) => {
          return <Employee
            key={index}
            employee={employee}
            bgColor={team.color}
            onDelete={onDelete}
          />
        })}
      </div>

    </section>
  );
};

export default Team;