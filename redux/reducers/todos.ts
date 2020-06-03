import { ADD_TODO, TOGGLE_TODO } from '../types';

const initialState: Array<Todo> = [];

export default function (state = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      const newTodo = state.map((todo) => {
        if (todo.text === action.payload?.text) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      return newTodo;
    default:
      return state;
  }
}
