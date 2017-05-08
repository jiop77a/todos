import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store';
import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';

window.store = Store;
window.allTodos = allTodos(window.store.getState());
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;




document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={Store}/>,
    document.getElementById('root')
  );
});
