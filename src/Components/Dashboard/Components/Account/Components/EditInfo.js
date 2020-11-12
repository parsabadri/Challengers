import React from "react";
import axios from "axios";

const EditInfo = (props) => {
  return (
    <div className="content-wrapper account">
      <h1>Profile</h1>
      <div className="content container">
        <div className="header">
          <h2>User Info</h2>
        </div>
        <span></span>
        <button className="edit-btn">Edit</button>
      </div>
    </div>
  );
};

export default EditInfo;
