import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import './Employee.css';

const Employee = ({employee, bgColor, onDelete, onFavourite}) => {
  function favourite() {
    onFavourite(employee.id)
  }

  const propsFavourite = {
    size: 25,
    onClick: favourite
  }
  return (
    <div className="employee">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => onDelete(employee.id)}
      />
      <div className="header-card" style={{backgroundColor: bgColor}}>
        <img src={employee.image} alt={employee.name}/>
      </div>
      <div className="footer-card">
        <h4>{employee.name}</h4>
        <h5>{employee.role}</h5>
        <div className="favourite">
          {employee.favourite 
            ? <AiFillHeart {...propsFavourite} color='#ff0000'/>
            : <AiOutlineHeart {...propsFavourite}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Employee;