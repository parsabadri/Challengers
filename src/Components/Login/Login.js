import React from "react";
import LoginVector from "../../Assets/Images/Vectors/Login.png";
import "../../Assets/Styles/Auth.scss";
import axios from "axios";
import { config } from "../../config";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    //this is an API call where we create a variable consisting
    // of login data, then pass it to API config(req) as API data,
    // then call the API and do as responded. The data is in FormData type.
    let AuthData = new FormData();
    AuthData.append("grant_type", "password");
    AuthData.append("username", document.getElementById("username").value);
    AuthData.append("password", document.getElementById("password").value);

    let req = {
      method: "POST",
      url: config.AuthURL,
      headers: {
        Authorization: "Basic " + config.base64secret,
      },
      data: AuthData,
    };
    axios(req)
      .then((res) => {
        //although the promiss is resolved, we need to check if the status is nothing but 200
        //to log the user in safely.
        if (res.status === 200) {
          window.localStorage.setItem("token", res.data.access_token);
          window.location.assign("/dashboard");
        }
      })
      .catch((err) => {
        window.alert(err.response.data.error_description);
      });
  };
  return (
    <div className="auth-wrapper">
      <img alt="login" src={LoginVector} />
      <div>
        <section className="app-name">
          <p>
            <span>
              <h5>P</h5>
            </span>
          </p>
          <p>PILOT PROJECT</p>
        </section>
        <form>
          <h5>Login</h5>
          <p>Use your provided email and password to login.</p>
          <input placeholder="Email" id="username" />
          <input type="password" id="password" placeholder="Password" />
          <Link to="/ResetPass">Forgot Password</Link>
          <button onClick={(event) => handleLogin(event)} id="test">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
