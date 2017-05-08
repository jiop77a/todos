import React from 'react';

const TodoList = props => (
  <div>
    <ul>
      {props.todos.map((todo, idx) => <li key={idx}>{ todo.title }</li>)}
    </ul>
  </div>
);

export default TodoList;
