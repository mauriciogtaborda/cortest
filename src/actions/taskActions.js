export function addTaskAction(task) {
  return {
    type: 'ADD_TASK',
    payload: {
      task
    }
  };
}
export function loading() {
  return {
    type: 'SET_LOADING'
  };
}

export function updateTaskAction(task) {
  return {
    type: 'UPDATE_TASK',
    payload: {
      task
    }
  };
}

export function deleteTaskAction(id) {
  return {
    type: 'DELETE_TASK',
    payload: {
      id
    }
  };
}