import React, { useEffect, useState } from "react";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "../../Assets/Styles/Dashboard.scss";
import { config } from "../../config";
import axios from "axios";

const Dashboard = () => {
  const [UserRole, setUserRole] = useState("");

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    parseJwt(token);
  }, [UserRole]);
  //this function recieves and decodes the token then returns a JSON file in order to get user Role
  //we get the user role and set it as component state accordingly.
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    setUserRole(JSON.parse(jsonPayload).authorities[0]);
  }

  //returning to the login page in case any error happens
  const ReturnHome = () => {
    window.alert("You need to login to your account first!");
    window.localStorage.clear(); //just to make sure users don't have any token saved
    window.location.assign("/");
  };

  //this conditional return is just to make sure we have the userRole before the UI is rendered.
  if (UserRole.length === 0) {
    return null;
  } else if (UserRole.length > 0) {
    return (
      <BrowserRouter basename="/dashboard">
        <div className="dashboard-wrapper">
          <Sidebar userRole={UserRole} />
          <DashboardContent userRole={UserRole} />
        </div>
      </BrowserRouter>
    );
  }
};
export default Dashboard;
