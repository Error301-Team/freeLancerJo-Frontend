import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


// const Dubelfunction = () => {
//   const { loginWithRedirect } = useAuth0();
//   loginWithRedirect()
//   {this.props.callApi}
// }
// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default withAuth0(LoginButton);
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;