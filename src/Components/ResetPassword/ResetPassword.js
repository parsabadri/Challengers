import React from "react";
import ResetPassVector from "../../Assets/Images/Vectors/ForgotPassword.svg";
import "../../Assets/Styles/Auth.scss";
import axios from "axios";
import { config } from "../../config";

const ResetPassword = () => {
  const requestResetpass = (event) => {
    event.preventDefault();
    let AccountToReset = {
      email: document.getElementById("email").value,
    };
    let req = {
      method: "POST",
      url: config.baseURL + "/rest/public/forgotPassword/submitRequest",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify(AccountToReset),
    };
    axios(req)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="auth-wrapper">
      <img alt="Auth" src={ResetPassVector} className="ResetPWDvector" />
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
          <h5>Forgot Password</h5>
          <p>Use your provided email to recieve password reset link.</p>
          <input id="email" placeholder="Email" />
          <button onClick={(event) => requestResetpass(event)} id="test">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;