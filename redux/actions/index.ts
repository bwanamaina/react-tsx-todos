import { ADD_TODO, TOGGLE_TODO } from '../types';

export const addTodo = (todo: Todo) => {
  return (dispatch: Function) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
};

export const toggleTodo = (todo: Todo) => {
  return (dispatch: Function) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todo,
    });
  };
};
