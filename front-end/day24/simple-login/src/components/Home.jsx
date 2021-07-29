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
    <div className="text-center">
      <h1 className="text-2xl mt-4">Home</h1>
      <h2 className="text-xl mt-4">
        If not logged in can't access, Profile & Dashboard
      </h2>
      {state.isAuthenticated}
      <button
        onClick={handleUserAuth}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2"
      >
        {state.isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
}
