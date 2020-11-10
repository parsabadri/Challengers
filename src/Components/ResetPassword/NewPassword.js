import React, { useState } from "react";
import Login from "../../Assets/Images/Vectors/Login.png";
import "../../Assets/Styles/Auth.scss";
import axios from "axios";
import { config } from "../../config";

const NewPassword = () => {
  const [LinkIsSent, setLinkIsSent] = useState(false);
  const [Message, setMessage] = useState([]);

  const requestResetpass = (event) => {
    event.preventDefault();
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
          <input id="new-password" placeholder="New Password" />
          <input id="verify-password" placeholder="New Password Again" />
          <button onClick={(event) => requestResetpass(event)} id="test">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewPassword;
