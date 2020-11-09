import React from "react";
import "../../../../Assets/Styles/Account.scss";
import User from "../../../../Assets/Images/Icons/User.svg";

const Account = (props) => {
  return (
    <div className="content-wrapper account">
      <h1>Profile</h1>
      <div className="content container">
        <div className="header">
          <h2>User Info</h2>
          <section className="flex">
            <img src={User} />
            <div className="inline-block grid">
              <p>Parsa Badri</p>
              <p>parsabadri</p>
            </div>
          </section>
          <span></span>
        </div>
        <div className="body">
          <div className="flex row">
            <p>Time Zone: </p>
            <p>Tehran</p>
          </div>
          <div className="flex row">
            <p>Email address: </p>
            <p>parsabadri@hotmail.com</p>
          </div>
          <div className="flex row">
            <p>Role: </p>
            <p>Super Admin</p>
          </div>
          <div className="flex row">
            <p>Joined Date: </p>
            <p>Wednesday, 14 October 2020</p>
          </div>
          <div className="flex row">
            <p>Password: </p>
            <p>*******</p>
          </div>
          <div className="flex row">
            <p>Security Question:: </p>
            <p>What will finally break the internet?</p>
          </div>
        </div>
        <span></span>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};
export default Account;
