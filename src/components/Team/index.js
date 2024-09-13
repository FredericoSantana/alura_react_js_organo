import './Team.css';
import Employee from "../Employee";

const Team = (props) => {
  const css = { backgroundColor: props.secondaryColor };
  return (
    (props.employees.length > 0) &&
    <section className="team" style={css}>
      <h3 style={{borderColor: props.primaryColor}}>
        {props.name}
      </h3>
      <div className="employees">
        {props.employees.map(employee => <Employee
          key={employee.nome}
          name={employee.nome}
          role={employee.cargo}
          image={employee.image}
          bgColor={props.primaryColor}
        />)}
      </div>

    </section>
  );
};

export default Team;