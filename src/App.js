import React, { useReducer } from "react";
import Card from './components/Card'
import Form from './components/Form'
import Filters from './components/Filters'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction, updateTaskAction } from './actions/taskActions';
import {setVisibilityFilter} from './actions/filterActions';

import './App.css'

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks);
  const filters = useSelector(state => state.filters);
  const [, forceRender] = useReducer(s => s + 1, 0)

  const handleDelete = (id) => {
    dispatch(deleteTaskAction(id));
  };
  
  const handleEditTask = (task) => {
    dispatch(updateTaskAction(task))
    forceRender()
  };
  
  const handleChangeFilters = (name, value) => {
    dispatch(setVisibilityFilter({[name]: value}))
  };
  
  const filterTasks = (tasksNotFiltered) => {
    return tasksNotFiltered.filter(task => ( filters.prioridad.length !== 0 ? task.prioridad === filters.prioridad : true) && ( filters.estado.length !== 0 ? task.estado === filters.estado : true))
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form />
      </div>
      <Filters
        filters={filters}
        handleChangeValue={handleChangeFilters}
      />
      <div className="todo-list">
        {filterTasks(tasks).map((task, index) => (
          <Card key={index}
            task={task}
            handleDelete={handleDelete}
            handleEditValue={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;