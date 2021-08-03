import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions";
const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    todos &&
    todos.map((todo) => {
      return (
        <div className="todo" key={todo.id}>
          <div className="todo-title">{todo.title}</div>
          <button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? "mark-incomplete" : "mark-complete"}
          </button>
          <button
            className="del-todo"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            delete
          </button>
        </div>
      );
    })
  );
};

export default ListTodo;
