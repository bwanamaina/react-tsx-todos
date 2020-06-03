import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { AppState } from '../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../redux/actions';

type Props = StateProps & DispatchProps;

const TodoLitst: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};

interface StateProps {
  todos: Todo[];
}

interface DispatchProps {
  toggleTodo: (todo: Todo) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.todos,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, TodoAction>
): DispatchProps => ({
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoLitst);
