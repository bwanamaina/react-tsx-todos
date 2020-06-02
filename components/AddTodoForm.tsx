import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        value={newTodo}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setNewTodo(event.currentTarget.value);
        }}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
