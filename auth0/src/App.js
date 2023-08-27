import { useAuth0 } from "@auth0/auth0-react";
import Style from "./App.module.css";

function App() {
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <div className={Style.Container}>
        {!isAuthenticated ? (
          <button
            className={Style.BotonLogin}
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        ) : (
          <button className={Style.BotonLogout} onClick={() => logout()}>
            Logout
          </button>
        )}
      </div>
      <div className={Style.Container}>
        {isAuthenticated && (
          <div>
            <img src={user.picture} />
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
