/* import logo from './logo.svg'; */
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { InputField } from "./components/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text })); //ключ из reducers-action
    setText("");
  };
  const toggleTodoComplete = (todoId) => {
    /*     setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    ); */
  };
  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <header className="App-header">header for App</header>
      <div className ="body">
        <label htmlFor="">
          <InputField
            text={text}
            handleInput={setText}
            handleSubmit={addTask}
          />
        </label>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
