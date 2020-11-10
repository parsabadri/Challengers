import React, { useState } from "react";
import Login from "../../Assets/Images/Vectors/Login.png";
import "../../Assets/Styles/Auth.scss";
import axios from "axios";
import { config } from "../../config";

const NewPassword = (props) => {
  const [LinkIsSent, setLinkIsSent] = useState(false);
  const [Message, setMessage] = useState([]);

  const requestResetpass = (event) => {
    event.preventDefault();
    let NewPassword = {
      password: document.getElementById("new-password").value,
      userId: props.userID,
      verifyPassword: document.getElementById("verify-password").value,
    };
    let req = {
      method: "POST",
      url: config.baseURL + "/rest/public/forgotPassword/changePassword",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify(NewPassword),
    };
    axios(req)
      .then((res) => {
        console.log(res);
        window.alert(res.data.message);
      })
      .catch((err) => {
        console.log(err.response);
        window.alert(err.response.data.message);
      });
  };
  return (
    <div className="auth-wrapper">
      <img alt="Auth" src={Login} />
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
          <h5>Reset Password</h5>
          <p>Set a new password for your account</p>
          <input id="new-password" type="password" placeholder="New Password" />
          <input
            id="verify-password"
            type="password"
            placeholder="New Password Again"
          />
          <button onClick={(event) => requestResetpass(event)} id="test">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewPassword;
