import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './logButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button id="button" style={{position: "absolute", top: "424px"}} onClick={() => loginWithRedirect()}>
  Join Us </button>;



};

export default LoginButton;