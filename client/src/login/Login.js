import React from "react";
import "./login.css";
import { loginEndpoint} from "../spotify";

// const AUTH_URL =
//   "https://accounts.spotify.com/en/authorize?client_id=541248b149a14f208427940b7b61b243&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state&response_type=token&show_dialog=true";


  const Login = () => {
  return (
    <div className="login">
      <img src="./images/logo.png" alt="logo" />
      {/* <button>LOGIN WITH SPOTIFY</button> */}
      <a href={loginEndpoint}>LOGIN WITH SPOTIFY1</a>
      {/* <a href={AUTH_URL}>LOGIN WITH SPOTIFY2</a> */}
    </div>
  );
};

export default Login;
