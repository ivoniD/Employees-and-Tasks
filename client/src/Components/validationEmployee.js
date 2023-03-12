export const validationEmployee = (employee) => {

  let errors ={}
  let phonePattern = /^\d{10}$/;
  let dateOfBirthPattern =  /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/;
  let salaryPattern =  /^\d+$/;


  if(!employee.firstName){
    errors.firstName = "First name is required"
  }else if(employee.firstName.length > 15){
    errors.firstName = "First name must be less than 15 letters long"
  }
  if(!employee.lastName){
    errors.lastName = "Last name is required"
  }else if(employee.lastName.length > 15){
    errors.lastName = "Last name must be less than 15 letters long"
  }
  if(!employee.email){
    errors.email = "Email is required"
  }
  if(!employee.phoneNumber){
    errors.phoneNumber = "Phone number is required"
  }else if(!(phonePattern.test(employee.phoneNumber))){
    errors.phoneNumber = "Phone number must be exactly 10 digits (0888**88**)"
  }
  if(!employee.dateOFBirth){
    errors.dateOFBirth = "Date of birth is required"
  }else if(!(dateOfBirthPattern.test(employee.dateOFBirth))){
    errors.dateOFBirth = "Date of birth format (**.**.1990)"
  }
  if(!employee.salary){
    errors.salary = "Salary is required"
  }else if(!(salaryPattern.test(employee.salary))){
    errors.salary = "Salary is not a number"
  }

  return errors;
}