import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
const AddTodo = () => {
  const initialTodo = {
    id: 1,
    title: "",
    completed: false,
  };
  const [todo, setTodo] = useState(initialTodo);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="Add todo"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todo));
          setTodo({ ...initialTodo, id: parseInt(todo.id) + 1 });
        }}
      >
        Add todo
      </button>
      {
        //   <button onClick={() => dispatch(loadTodos())}>Load Todos</button>
      }
    </>
  );
};

export default AddTodo;
