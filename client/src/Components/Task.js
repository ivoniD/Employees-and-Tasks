import { Link } from "react-router-dom"

export const Task = (props) => {
  return (
    <tr>
      <td></td>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.employee}</td>
      <td>{props.dueDate}</td>
      <td>
        <Link to="/edit/task" className="edit" data-toggle="modal" onClick={() => props.onEditClick(props.id)}>Edit </Link>
        <button className="deleteTaskEmployee" data-toggle="modal" onClick={() => props.deleteOne(props.id)}> Delete </button>
      </td>
    </tr>
  )

}