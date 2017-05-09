import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

  this.remove = this.remove.bind(this);
  this.toggleTodo = this.toggleTodo.bind(this);
  }

  remove(event) {
    event.preventDefault();
    let todo = this.props.todo;
    this.props.removeTodo(todo);
  }

  toggleTodo(event) {
    event.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );

    this.props.receiveTodo(toggledTodo);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <li>
          <p><strong>{ todo.title }</strong></p>
          <p>{ todo.body }</p>
          <button onClick={ this.remove }>Delete Todo</button>
          <button onClick={ this.toggleTodo }>
            { todo.done ? "Undo" : "Done"}
          </button>
        </li>
      </div>
    );
  }
}

export default TodoListItem;
