import { Link } from "react-router-dom"
import { Task } from "./Task"

export const TasksList =(props) => {

  return(
    <>
<div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
        <div className="addNew"><Link to="/create/task"><b className="addBtn">ADD NEW</b></Link></div>
          <h2> <b>Tasks</b></h2>
        </div>
       
      </div>
    </div>
    <table className="table table-striped table-hover">

      {props.allTasks.length !== 0 && 
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Description</th>
          <th>Assigne</th>
          <th>Due date</th>
        </tr>
      </thead>
      }
      
      { props.allTasks.length !== 0
      ?  props.allTasks.map(task => <tbody>  <Task  {...task} onEditClick={props.onEditClick} deleteOne = {props.deleteOne}/> </tbody>)
      : <tbody><tr>NO TASKS</tr></tbody> 
      }

    </table>

  </div>
</div>
</>
  )
}