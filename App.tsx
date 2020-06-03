import React from 'react';

import TodoLitst from './components/TodoLitst';
import AddTodoForm from './components/AddTodoForm';

const App: React.FC = () => {
  return (
    <>
      <AddTodoForm />
      <TodoLitst />
    </>
  );
};

export default App;
