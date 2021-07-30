import { USER_FORM_ACTIONS } from "../actions";

const initialForm = {
  username: "",
  email: "",
};

const userFormReducer = (state = initialForm, action) => {
  switch (action.type) {
    case USER_FORM_ACTIONS.SET_FORM_DATA:
      return {
        ...initialForm,
        username: action.payload.username,
        email: action.payload.email,
      };
    case USER_FORM_ACTIONS.CLEAR_FORM_DATA:
      return initialForm;
    default:
      return state;
  }
};

export default userFormReducer;
