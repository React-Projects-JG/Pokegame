import React, { Component } from "react";
import uuid from "uuid/dist/v4";
import "./TodoForm.css";

export class TodoForm extends Component {
  state = { task: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo </label>
        <input
          name="task"
          id="task"
          type="text"
          placeholder="New Task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
