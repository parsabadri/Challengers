import React from "react";
import "../../Assets/Styles/404Page.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-text">Requested Page Not Found!</h1>
      <a href="/">Go back</a>
    </div>
  );
};

export default NotFoundPage;
