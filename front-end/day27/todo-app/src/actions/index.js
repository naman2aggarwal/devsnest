import { TODO_ACTION_TYPES } from "./actionType";
const addTodo = (todo) => {
  return {
    type: TODO_ACTION_TYPES.ADD,
    payload: todo,
  };
};

const deleteTodo = (id) => {
  return {
    type: TODO_ACTION_TYPES.REMOVE,
    payload: id,
  };
};

const toggleTodo = (id) => {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_STATUS,
    payload: id,
  };
};

const loadTodos = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({
          type: TODO_ACTION_TYPES.LOAD_TODOS,
          payload: todos,
        });
      });
  };
};

export { addTodo, deleteTodo, toggleTodo, loadTodos };
