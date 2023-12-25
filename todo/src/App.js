/* import logo from './logo.svg'; */
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
  };
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <header className="App-header">header for App</header>
      <body>
        <label htmlFor="">
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={addTodo}>+Add</button>
        </label>
        <TodoList
          todos={todos}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
      </body>
    </div>
  );
}

export default App;
