import React from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux"

const TodoList = ({removeTodo, toggleTodoComplete }) => {
  const todos = useSelector(state=> state.todos.todos);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
            {...todo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
