import {replaceObjectInArray} from '../utils/utils'
const initialState = {
    tasks: []
  };
  
  function tasksReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            action.payload.task
          ]
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: replaceObjectInArray(state.tasks, action.payload.task)
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => {
            return task.id !== action.payload.id;
          })
        };
      default:
        return state;
    }
  }
  
  export default tasksReducer;