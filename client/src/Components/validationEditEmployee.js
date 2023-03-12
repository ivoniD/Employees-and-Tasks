export const validationEditEmployee = (employee) => {

  let errors ={}
  let phonePattern = /^\d{10}$/;
  let salaryPattern =  /^\d+$/;



  if(!employee.email){
    errors.email = "Email is required"
  }
  if(!employee.phoneNumber){
    errors.phoneNumber = "Phone number is required"
  }else if(!(phonePattern.test(employee.phoneNumber))){
    errors.phoneNumber = "Phone number must be exactly 10 digits (0888**88**)"
  }
  if(!employee.salary){
    errors.salary = "Salary is required"
  }else if(!(salaryPattern.test(employee.salary))){
    errors.salary = "Salary is not a number"
  }

  return errors;
}