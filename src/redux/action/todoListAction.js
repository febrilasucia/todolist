export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function updateTodo(payload) {
  return {
    type: UPDATE_TODO,
    payload,
  };
}

export function deleteTodo(key) {
  console.log(key, 'dari action');
  return {
    type: DELETE_TODO,
    payload: key,
  };
}
