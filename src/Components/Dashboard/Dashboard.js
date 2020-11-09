import React, { useEffect, useState } from "react";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "../../Assets/Styles/Dashboard.scss";
import { config } from "../../config";
import axios from "axios";

const Dashboard = () => {
  const [UserRole, setUserRole] = useState("");
  const [IsFirstLogin, setIsFirstLogin] = useState(false);
  //this part is not complete and probably won't be here(change asap)
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    parseJwt(token);
    if (UserRole === "ROLE_ADMIN") {
      getAdminMenu();
    } else if (UserRole === "ROLE_SUPER_ADMIN") {
      getSuAdminMenu();
    }
  }, [UserRole, IsFirstLogin]);
  const getAdminMenu = () => {
    let req = {
      method: "GET",
      url: config.baseURL + "/rest/admin/menus/getMenus",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getSuAdminMenu = () => {
    let req = {
      method: "GET",
      url: config.baseURL + "/rest/superadmin/menus/getMenus",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
        if (res.data.data.menus[0].mainPage === true) {
          document.getElementById("ml-link").click();
          setIsFirstLogin(true);
        } else if (res.data.data.menus[2].mainPage === true) {
          document.getElementById("home-link").click();
          setIsFirstLogin(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
