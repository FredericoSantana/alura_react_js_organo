import './Employee.css';

const Employee = ({name, role, image, bgColor}) => {
  return (
    <div className="employee">
      <div className="header-card" style={{backgroundColor: bgColor}}>
        <img src={image}/>
      </div>
      <div className="footer-card">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Employee;