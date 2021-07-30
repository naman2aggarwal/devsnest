import userFormReducer from "./userFormReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userform: userFormReducer,
});

export default rootReducer;
