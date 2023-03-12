import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validationTask } from "./validationTask";

export const CreateNewTask = (props) => {

  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: '',
    description: '',
    employee: '',
    dueDate: '',
});

const [errors, setErrors] = useState({})
const [dataIsCorrect, setDataIsCorrect] = useState(false)



  const changeHandler = (e) => {
    setTask(state => ({
      ...state,
      [e.target.name]: e.target.value
  }));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validationTask(task))
      setDataIsCorrect(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      props.addNew(task)
      navigate('/tasks')
    }
  }, [errors])

  return (
    <div className="container">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Create New <b>Task</b></h2>
          </div>

        </div>
      </div>
      <form onSubmit={submitHandler}>

        <label htmlFor="title">Title</label>
        <div className="input-wrapper">
          <input name="title" type="text" value={task.title} onChange={changeHandler}/>
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <label htmlFor="description">Description</label>
        <div className="input-wrapper">

          <textarea name="description" type="text-area" value={task.description} onChange={changeHandler}/>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        
        <label htmlFor="employee">Select Employee: </label>
        <div className="input-wrapper">

        
<select name="employee" value={task.employee} onChange={changeHandler}>
  <option value="" selected disabled>Select an employee</option>
  {props.allEmployees.map((x) => (
    <option value={x.firstName + ' ' + x.lastName}>{`${x.firstName} ${x.lastName}`}</option>
  ))}
</select>
        {errors.employee && <p className="error">{errors.employee}</p>}
        </div>

       
        <label htmlFor="dueDate">Due date</label>
        <div className="input-wrapper">
          <input name="dueDate" type="date" value={task.dueDate} onChange={changeHandler}/>
          {errors.dueDate && <p className="error">{errors.dueDate}</p>}
        </div>

        <div >
        <br />
          <button  className="btn" type="submit" >Save</button>
          <button  className="btn" type="button" onClick = {() => navigate('/tasks')}>
            Cancel
          </button>
        </div>

      </form>
    </div>
    </div>
  )
}




