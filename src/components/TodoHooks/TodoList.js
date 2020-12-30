import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <React.Fragment>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodos={toggleTodos}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
