import React from 'react';
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const todoItems = this.props.todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
    )
  );

  return(
    <div>
      <ul className="todo-list">
        { todoItems }
      </ul>
    </div>
  );

  }
}


export default TodoList;
