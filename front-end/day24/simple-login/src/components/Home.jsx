import { useLogin } from "../LoginProvider";
import { LOGIN_PROVIDER_ACTION_LIST } from "../LoginProvider";
export default function Home() {
  const { state, dispatch } = useLogin();
  const handleUserAuth = () => {
    if (state.isAuthenticated) {
      dispatch({
        type: LOGIN_PROVIDER_ACTION_LIST.LOGOUT,
      });
    } else {
      dispatch({
        type: LOGIN_PROVIDER_ACTION_LIST.LOGIN,
      });
    }
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>If not logged in can't access, Profile & Dashboard</h2>
      {state.isAuthenticated}
      <button onClick={handleUserAuth}>
        {state.isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
}
