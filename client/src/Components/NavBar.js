import { Link } from "react-router-dom"

export const NavBar = (props) => {
  return (
    <nav className="nav">

      <ul>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <br></br>
        <li><button className="employeeBtn" onClick = {props.bestEmployees}>Last month completed tasks</button></li>
      </ul>
    </nav>
  )
}