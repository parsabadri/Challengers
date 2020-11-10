import React from "react";
import ResetPassVector from "../../Assets/Images/Vectors/ForgotPassword.svg";
import "../../Assets/Styles/Auth.scss";
import axios from "axios";
import { config } from "../../config";
import { useParams } from "react-router";

const Verify = () => {
  //this parameter is gotten by the use of useParams hook. it is the id of the user whose
  //identity we want to verify.
  let { id } = useParams();

  if (!id) {
    //just to make sure we always have the id
    return null;
  }

  const VerifyUserId = (event) => {
    event.preventDefault();

    //we define API config and pass the id as a url parameter to request url,
    //then do the API call using axios
    let req = {
      method: "GET",
      url: config.baseURL + "/rest/public/forgotPassword/verify/" + id,
    };
    axios(req)
      .then((res) => {
        console.log(res);
        window.alert(res.data.message);
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
          <h5>Verify your identity</h5>
          <p> Click the Verify button to proceed. </p>
          <button onClick={(event) => VerifyUserId(event)} id="test">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
export default Verify;
