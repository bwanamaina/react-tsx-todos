import React, { useState } from 'react';
import './App.css';

import TodoLitst from './components/TodoLitst';
import AddTodoForm from './components/AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: 'Learn Typescript', complete: true },
  { text: 'Learn Rect', complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo) {
      setTodos([
        ...todos,
        {
          text: newTodo,
          complete: false,
        },
      ]);
    }
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoLitst todos={todos} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
