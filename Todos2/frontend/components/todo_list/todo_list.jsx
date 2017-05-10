import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



class TodoList extends React.Component {


  render() {
    const todoItems = this.props.todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        receiveTodo={ this.props.receiveTodo }
        removeTodo={ this.props.removeTodo } />
      )
    );

    return(
      <div>
        <ol className="todo-list">
          { todoItems }
        </ol>
        <TodoForm receiveTodo={ this.props.receiveTodo }/>
      </div>
    );
  }
}


export default TodoList;
