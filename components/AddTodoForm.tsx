import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../redux/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../redux/store';

type Props = StateProps & DispatchProps;

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo({
      text: newTodo,
      complete: false,
    });
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

interface StateProps {
  todos: Todo[];
}

interface DispatchProps {
  addTodo: (todo: Todo) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.todos,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, TodoAction>
): DispatchProps => ({
  addTodo: bindActionCreators(addTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
