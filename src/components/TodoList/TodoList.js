import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./TodoList.css";

export class TodoList extends Component {
  state = { todos: [] };

  create = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  remove = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };
  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.updateTodo}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List!<span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <TodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
