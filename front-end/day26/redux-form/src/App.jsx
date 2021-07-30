import "./App.css";
import { USER_FORM_ACTIONS } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const userForm = useSelector((state) => state.userform);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Input</h2>
      <input
        type="text"
        placeholder="Username"
        value={userForm.username}
        onChange={(e) =>
          dispatch({
            type: USER_FORM_ACTIONS.SET_FORM_DATA,
            payload: {
              ...userForm,
              username: e.target.value,
            },
          })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={userForm.email}
        onChange={(e) =>
          dispatch({
            type: USER_FORM_ACTIONS.SET_FORM_DATA,
            payload: {
              ...userForm,
              email: e.target.value,
            },
          })
        }
      />
      <button
        onClick={(e) =>
          dispatch({
            type: USER_FORM_ACTIONS.CLEAR_FORM_DATA,
          })
        }
      >
        Clear
      </button>
      <h2>Data</h2>
      <div>
        Username: <span>{userForm.username}</span>
      </div>
      <div>
        Email: <span>{userForm.email}</span>
      </div>
    </div>
  );
}

export default App;
