import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validationEmployee } from "./validationEmployee";



export const CreateNewEmployee = (props) => {
 const navigate =  useNavigate()

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOFBirth: '',
    salary: ''
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

      setErrors(validationEmployee(employee))
      setDataIsCorrect(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      props.addNew(employee)
      navigate('/employees')
    }
  }, [errors])
  


  return (

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
            <input id="firstName" name="firstName" type="text" value={employee.firstName} onChange={changeHandler} />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            
          </div>

          <label htmlFor="lastName">Last name</label>
          <div className="input-wrapper">
            <input id="lastName" name="lastName" type="text" value={employee.lastName} onChange={changeHandler} />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>


          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input id="email" name="email" type="text" value={employee.email} onChange={changeHandler} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <label htmlFor="phoneNumber">Phone number</label>
          <div className="input-wrapper">
            <input id="phoneNumber" name="phoneNumber" type="text" value={employee.phoneNumber} onChange={changeHandler} />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>

          <label htmlFor="dateOFBirth">Date of birth</label>
          <div className="input-wrapper">
            <input id="dateOFBirth" name="dateOFBirth" type="text" value={employee.dateOFBirth} onChange={changeHandler} />
            {errors.dateOFBirth && <p className="error">{errors.dateOFBirth}</p>}
          </div>


          <label htmlFor="salary">Salary</label>
          <div className="input-wrapper">
            <input id="salary" name="salary" type="text" value={employee.salary} onChange={changeHandler} />
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