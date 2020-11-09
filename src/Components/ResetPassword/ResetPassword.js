import React from "react";
import ResetPassVector from "../../Assets/Images/Vectors/ForgotPassword.svg";
import "../../Assets/Styles/Auth.scss";

const ResetPassword = () => {
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
          <input placeholder="Email" />
          <button id="test">Send</button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
