import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

import { NavBar } from './Components/NavBar';
import { CreateNewEmployee } from './Components/CreateNewEmployee';
import { CreateNewTask } from './Components/CreateNewTask';
import { EmployeesList } from './Components/EmployeesList';
import { TasksList } from './Components/TasksList';
import { EditTask } from './Components/EditTask';
import { EditEmployee } from './Components/EditEmployee';
import { BestEmployees } from './Components/BestEmployees';



function App() {

  const navigate = useNavigate()
  const [lastMonthBest, setLastMonthBest] = useState([]);

  const [allEmployees, setAllEmployees] = useState(() => {
    const data = localStorage.getItem('employees')
    return (data) ? JSON.parse(data) : []
  })

  const [allTasks, setAllTasks] = useState(() => {
    const data = localStorage.getItem('tasks')
    return (data) ? JSON.parse(data) : []
  })

  const [currentClickedEmployee, setCurrentClickedEmployee] = useState({})
  const [currentClickedTask, setCurrentClickedTask] = useState({})


  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(allEmployees))
  }, [allEmployees])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks))
  }, [allTasks])



  const employeesHandler = (employee) => {
    // console.log(employee);
    employee['id'] = uuidv4()
    setAllEmployees(allEmployees => [...allEmployees, employee])
  }

  const taskHandler = (task) => {
    task['id'] = uuidv4()
    console.log(task);
    setAllTasks(allTasks => [...allTasks, task])
  }

  const deleteEmployeeHandler = (id) => {
    const filteredEmployees = allEmployees.filter((x, i) => {
      return x.id !== id
    })
    setAllEmployees(filteredEmployees)
  }

  const deleteTaskHandler = (id) => {
    const filteredTasks = allTasks.filter((x, i) => {
      return x.id !== id
    })
    setAllTasks(filteredTasks)
  }

  const employeesOfTHeMonthHandler = () => {
    const today = new Date();
    console.log(today);
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    console.log(lastMonth);
    const lastMonthTasks = allTasks.filter(task => (new Date(task.dueDate) >= lastMonth && new Date(task.dueDate) <= today));
    const employeeTasks = lastMonthTasks.reduce((acc, task) => {
      if (task.employee in acc) {
        acc[task.employee]++;
      } else {
        acc[task.employee] = 1;
      }
      return acc;
    }, {});


  const sortedEmployeeTasks = Object.entries(employeeTasks).sort(([,a], [,b]) => b - a)
    setLastMonthBest(sortedEmployeeTasks)
    navigate('bestEmployees')
  }

  const onEditEmployeeHandler = (id) => {
    console.log(id);
    const curentEmployee = allEmployees.filter(x => x.id === id)
    setCurrentClickedEmployee(curentEmployee)
    console.log(curentEmployee[0])
  }

  const onEditTaskHandler = (id) => {
    console.log(id);
    const currentTask = allTasks.filter(x => x.id === id)
    setCurrentClickedTask(currentTask)
    console.log(currentTask[0])
  }

  const editEmpoloyee = (empl) => {
    setAllEmployees(oldEmployees => oldEmployees.map(x => {
      if (x.id === empl.id) {
        return empl
      } else {
        return x
      }
    }))
    navigate('/employees')
  }

  const editTask = (task) => {
    setAllTasks(oldTasks => oldTasks.map(x => {
      if (x.id === task.id) {
        return task
      } else {
        return x
      }
    }))
    navigate('/tasks')
  }


  return (
    <div className="App">
      <NavBar bestEmployees={employeesOfTHeMonthHandler} allTasks={allTasks} />
      <div className='container'>
        <Routes>
          <Route path='/create/employee' element={<CreateNewEmployee addNew={employeesHandler} />} />
          <Route path='/create/task' element={<CreateNewTask addNew={taskHandler} allEmployees={allEmployees} />} />
          <Route path='/employees' element={<EmployeesList allEmployees={allEmployees} onEditClick={onEditEmployeeHandler} deleteOne={deleteEmployeeHandler} />} />
          <Route path='/tasks' element={<TasksList allTasks={allTasks} deleteOne={deleteTaskHandler} onEditClick={onEditTaskHandler} />} />
          <Route path='/edit/task' element={<EditTask editTask={editTask} task={currentClickedTask[0]} />} />
          <Route path='/edit/employee' element={<EditEmployee editEmpoloyee={editEmpoloyee} employee={currentClickedEmployee[0]} />} />
          <Route path='/bestEmployees' element={<BestEmployees lastMonthBest={lastMonthBest} />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;





