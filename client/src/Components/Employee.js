import { Link } from "react-router-dom"

export const Employee = (props) => {

  return( 
  <tr>
    <td>{props.firstName}</td>
    <td>{props.lastName}</td>
    <td>{props.email}</td>
    <td>{props.phoneNumber}</td>
    <td>{props.dateOFBirth}</td>
    <td>{props.salary} $</td>
    <td>
    <Link to="/edit/employee" className="edit" data-toggle="modal" onClick={() => props.onEditClick(props.id)}>  Edit  </Link>
      <button  className="deleteTaskEmployee" data-toggle="modal" onClick={() => props.deleteOne(props.id)}>  Delete  </button>
    </td>
  </tr>
  )
}