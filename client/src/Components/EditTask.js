import { useState, useEffect } from "react";
import { validationEditTask } from "./validationEditTask";
import { useNavigate } from "react-router-dom";

export const EditTask = (props) => {

  const navigate =  useNavigate()

  const [values, setValues] = useState({
    description: props.task.description,
    dueDate: props.task.dueDate,
});

const [errors, setErrors] = useState({})
const [dataIsCorrect, setDataIsCorrect] = useState(false)

useEffect(() => {
  if(Object.keys(errors).length === 0 && dataIsCorrect){
    let currentTask = props.task;
  currentTask.description = values.description;
  currentTask.dueDate = values.dueDate;

  props.editTask(currentTask)
  }
}, [errors])


const changeHandler = (e) => {
  setValues(state => ({
    ...state,
    [e.target.name]: e.target.value
}));
}

  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validationEditTask(values))
    setDataIsCorrect(true)
}


  return(
    <>
    <div className="container">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Edit <b>Task</b></h2>
          </div>
  
        </div>
      </div>
      <form onSubmit={submitHandler}>
  
        <label htmlFor="title">Title</label>
        <div className="input-wrapper">
          <input name="title" type="text" value={props.task.title}  disabled/>
        </div>
  
        <label htmlFor="description">Description</label>
        <div className="input-wrapper">
  
          <textarea id="description" name="description" type="text-area" defaultValue={props.task.description} onChange={changeHandler} />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
  
        <label htmlFor="employee">Employee</label>
        <div className="input-wrapper">
          <input name="employee" type="text" defaultValue={props.task.employee}  disabled/>
        </div>
  
        <label htmlFor="dueDate">Due date</label>
        <div className="input-wrapper">
          <input id="dueDate" name="dueDate" type="date" defaultValue={props.task.dueDate} onChange={changeHandler}/>
          {errors.dueDate && <p className="error">{errors.dueDate}</p>}
        </div>
  
        <div >
        <br />
          <button  className="btn" type="submit" >Save</button>
          <button  className="btn" type="button"  onClick = {() => navigate('/tasks')}>
            Cancel
          </button>
        </div>
  
      </form>
    </div>
    </div>
    </>
  
  )
}