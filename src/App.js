import React, { useState } from "react";
import Card from './components/Card'
import Form from './components/Form'
import Filters from './components/Filters'
import {replaceObjectInArray, findIndexById} from './utils/utils'
import './App.css'

const initialValues = {titulo:"", descripcion:"", prioridad:"", estado:""}
const prioridades = ['Alta', 'Media','Baja'];
const estados = ['Nueva', 'En proceso','Finalizada'];

function App() {
  const [tasks, setTasks] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [filters, setFilters] = useState(initialValues);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, {...values, id: Math.floor(Math.random() * 100)}]);
    setValues(initialValues);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      let index = findIndexById(newTasks, id)
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  const handleChangeValue = (name, value) => {
    setValues((prevValue) => ({
     ...prevValue, [name]: value 
    }));
  };

  const handleEditTask = (task) => {
    let taskscopy = [...tasks];
    taskscopy = replaceObjectInArray(taskscopy, task)
    setTasks(taskscopy)
  };

  const handleChangeFilters = (name, value) => {
    setFilters((prevValue) => ({
     ...prevValue, [name]: value 
    }));
  };
  
  const filterTasks = (tasksNotFiltered) => {
    return tasksNotFiltered.filter(task => ( filters.prioridad.length !== 0 ? task.prioridad === filters.prioridad : true) && ( filters.estado.length !== 0 ? task.estado === filters.estado : true))
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form
          handleSubmit={handleSubmit}
          handleChangeValue={handleChangeValue}
          values={values}
          prioridades={prioridades}
          estados={estados}
        />
      </div>
      <Filters
        prioridades={prioridades}
        estados={estados}
        filters={filters}
        handleChangeValue={handleChangeFilters}
      />
      <div className="todo-list">
        {filterTasks(tasks).map((task, index) => (
          <Card key={index}
            task={task}
            prioridades={prioridades}
            estados={estados}
            handleDelete={handleDelete}
            handleEditValue={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;