import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validationEditEmployee } from "./validationEditEmployee";

export const EditEmployee = (props) => {

  let navigate = useNavigate()

  const [employee, setEmployee] = useState({
    email: props.employee.email,
    phoneNumber: props.employee.phoneNumber,
    salary: props.employee.salary,
  });

  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const changeHandler = (e) => {
    setEmployee(oldState => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validationEditEmployee(employee))
    setDataIsCorrect(true)

  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      let currentEmployee  = props.employee;
    currentEmployee.email = employee.email
    currentEmployee.phoneNumber = employee.phoneNumber;
    currentEmployee.salary = employee.salary

    props.editEmpoloyee(currentEmployee)
    }
  }, [errors])

  return(
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Add New <b>Employees</b></h2>
            </div>

          </div>
        </div>

        <form onSubmit={submitHandler}>

          <label htmlFor="firstName">First name</label>
          <div className="input-wrapper">
            <input id="firstName" name="firstName" type="text" value={props.employee.firstName}   disabled/>
          </div>

          <label htmlFor="lastName">Last name</label>
          <div className="input-wrapper">
            <input id="lastName" name="lastName" type="text" value={props.employee.lastName}  disabled/>
          </div>


          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input id="email" name="email" type="text"  defaultValue={props.employee.email} onChange={changeHandler} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <label htmlFor="phoneNumber">Phone number</label>
          <div className="input-wrapper">
            <input id="phoneNumber" name="phoneNumber" type="text" defaultValue={props.employee.phoneNumber} onChange={changeHandler} />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>

          <label htmlFor="dateOFBirth">Date of birth</label>
          <div className="input-wrapper">
            <input id="dateOFBirth" name="dateOFBirth" type="text" value={props.employee.dateOFBirth}  disabled/>
          </div>


          <label htmlFor="salary">Salary</label>
          <div className="input-wrapper">
            <input id="salary" name="salary" type="text" defaultValue={props.employee.salary}  onChange={changeHandler}/>
            {errors.salary && <p className="error">{errors.salary}</p>}
          </div>



          <div >
            <br />
            <button className="btn" type="submit" >Save</button>
            <button className="btn" type="button" onClick = {() => navigate('/employees')}>
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}