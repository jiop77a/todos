import React from 'react';
import { uniqueId } from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            value={this.state.title}
            onChange={this.update('title')}/>
        </label>
        <label>Body:
          <textarea
            value={this.state.body}
            onChange={this.update('body')}>
          </textarea>
        </label>
        <button>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
