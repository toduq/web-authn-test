import { onRegister } from "./auth/registration";
import { onLogin } from "./auth/login";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    onLogin(true); // autofill
  });

  return (
    <>
      <h1>Web Authn Test</h1>
      <p>
        <button onClick={onRegister}>Registration</button>
      </p>
      <p>
        <button onClick={() => onLogin(false)}>Login</button>
        <input type="text" name="username" autoComplete="webauthn" />
      </p>
    </>
  );
}

export default App;
