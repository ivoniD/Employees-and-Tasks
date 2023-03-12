export const validationTask = (task) => {

  let errors ={}


  if(!task.title){
    errors.title = "Title is required"
  }else if(task.title.length > 40){
    errors.title = "Title must be less than 40 letters long"
  }
  if(!task.description){
    errors.description = "Description is required"
  }else if(task.description.length > 100){
    errors.description = "Description must be less than 100 letters long"
  }
  if(!task.employee){
    errors.employee = "Employee is required"
  }
  if(!task.dueDate){
    errors.dueDate = "Due date is required"
  }
  

  return errors;
}