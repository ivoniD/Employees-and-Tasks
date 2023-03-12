import { Link } from "react-router-dom"
import { Employee } from "./Employee"

export const EmployeesList = (props) => {

  return (
    <>
<div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <div className="addNew"><Link to="/create/employee"><b className="addBtn">ADD NEW</b></Link></div>
          <h2> <b>Employees</b></h2>
         
        </div>
      </div>
    </div>
    <table className="table table-striped table-hover">


      {props.allEmployees.length !== 0  &&
        <thead>  
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of birth</th>
            <th>Salary</th>
        </thead>
      }
     
      {props.allEmployees.length !== 0
      
      ? props.allEmployees.map(x =>  <tbody key={x.phone}> <Employee {...x} onEditClick={props.onEditClick} deleteOne = {props.deleteOne}/>  </tbody>)
      : <tbody> <tr>NO EMPLOYEES</tr> </tbody>
      }

    </table>
  </div>
</div>
</>
  )
}