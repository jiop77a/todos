import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store';
import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';


const App = () => (
  <h1>Todos App</h1>
);


document.addEventListener("DOMContentLoaded", () => {
  window.store = Store;
  window.allTodos = allTodos(window.store.getState());
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
