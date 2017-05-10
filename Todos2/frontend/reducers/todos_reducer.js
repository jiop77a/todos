import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TODO:
      return merge({}, oldState, {[action.todo.id]: action.todo});
    case RECEIVE_TODOS:
      let newTodos = {};
      action.todos.forEach((todo) => {
        newTodos[todo.id] = todo;
      });
    case REMOVE_TODO:
      let nextState = merge({}, oldState);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return oldState;
  }
};

export default todosReducer;
