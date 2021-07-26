import { useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
  const key = "todos";
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useLocalStorage(key, []);
  return (
    <div className="App">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
