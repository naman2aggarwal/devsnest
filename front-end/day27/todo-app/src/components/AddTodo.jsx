import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { InputGroup, FormControl, Button } from "react-bootstrap";
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
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a todo.."
          aria-label="title for todo"
          aria-describedby="add-todo"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <Button
          variant="outline-dark"
          id="add-todo"
          onClick={() => {
            if (todo.title.trim() === "") {
              return;
            }
            dispatch(addTodo(todo));
            setTodo({ ...initialTodo, id: parseInt(todo.id) + 1 });
          }}
        >
          Add Todo
        </Button>
      </InputGroup>

      {
        //   <button onClick={() => dispatch(loadTodos())}>Load Todos</button>
      }
    </>
  );
};

export default AddTodo;
