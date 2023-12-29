import React from "react";
import { removeTodo } from "../store/todoSlice";
import {useDispatch} from "react-redux";

const TodoItem = ({ id, text, completed, /* removeTodo, */ toggleTodoComplete }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({id}))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;