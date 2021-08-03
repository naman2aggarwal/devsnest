import { TODO_ACTION_TYPES } from "../actions/actionType";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD:
      return [...state, action.payload];
    case TODO_ACTION_TYPES.REMOVE:
      return state.filter((todo) => action.payload !== todo.id);
    case TODO_ACTION_TYPES.TOGGLE_STATUS:
      let todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return [...state];
    case TODO_ACTION_TYPES.LOAD_TODOS:
      return action.payload.splice(0, 7);
    default:
      return state;
  }
};

export default todoReducer;
