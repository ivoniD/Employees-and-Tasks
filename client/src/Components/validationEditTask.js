export const validationEditTask = (task) => {

  let errors ={}



  if(!task.description){
    errors.description = "Description is required"
  }else if(task.description.length > 100){
    errors.description = "Description must be less than 100 letters long"
  }
  if(!task.dueDate){
    errors.dueDate = "Due date is required"
  }
  

  return errors;
}