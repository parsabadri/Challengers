import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "../../../../../Assets/Images/Icons/Home.svg";
import Attrition from "../../../../../Assets/Images/Icons/Attrition.svg";
import ML from "../../../../../Assets/Images/Icons/ML.svg";
import Notes from "../../../../../Assets/Images/Icons/Notes.svg";
import Users from "../../../../../Assets/Images/Icons/Users.svg";
import Roles from "../../../../../Assets/Images/Icons/Roles.svg";
import UsersList from "../../../../../Assets/Images/Icons/UsersList.svg";
import Upload from "../../../../../Assets/Images/Icons/Upload.svg";
import ArrowDown from "../../../../../Assets/Images/Icons/ArrowDown.svg";
import Minimize from "../../../../../Assets/Images/Icons/NavToggle.svg";
import Logout from "../../../../../Assets/Images/Icons/Logout.svg";
import Archive from "../../../../../Assets/Images/Icons/Archive.svg";

import Collapsible from "react-collapsible";

const SuAdminSidebar = (props) => {
  const [SidebarMinimized, setSidebarMin] = useState(false);

  useEffect(() => {}, []);

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.assign("/");
  };
  //in this function we set the minimization state and apply rotation to the arrow
  const MinimizeSidebar = () => {
    setSidebarMin(!SidebarMinimized);
    if (!SidebarMinimized) {
      document.getElementById("sidebar").style.width = "73px";
      document.getElementById("minimize-icon").style.transform =
        "rotate(180deg)";
      document.getElementById("sidebar").classList.add("sidebar-minimiezd");
    } else {
      document.getElementById("sidebar").style.transitionDelay = "0";
      document.getElementById("sidebar").style.width = "291px";
      document.getElementById("minimize-icon").style.transform = "none";
      document.getElementById("sidebar").classList.remove("sidebar-minimiezd");
    }
  };
  return (
    <div id="sidebar" className="sidebar">
      <section className="app-name navbar-brand">
        <p className="min-name">
          <h5>P</h5>
        </p>
        <p className="min">PILOT PROJECT</p>
      </section>
      <button className="minimizer" onClick={() => MinimizeSidebar()}>
        <img id="minimize-icon" src={Minimize} alt="minimize" />
      </button>
      <div className="account">
        <Link to="/Account" className="no-hover info">
          <img src={props.UserInfo[0].avatar} alt="User" />
          <section className="min">
            <p>{props.UserInfo[0].name}</p>
            <p>{props.UserInfo[0].username}</p>
          </section>
          <button className="min">
            <img src={ArrowDown} alt="Dropdown" />
          </button>
        </Link>
      </div>
      <NavLink
        id="home-link"
        activeClassName="nav-active"
        exact={true}
        to="../"
      >
        <img alt="home" src={Home} />
        <p className="min">Home</p>
      </NavLink>
      <NavLink
        id="ml-link"
        className="nav-parent"
        activeClassName="nav-active"
        to="/ML"
      >
        <Collapsible
          className="nav-collapsible"
          trigger={
            <NavLink activeClassName="nav-active" to="/ML">
              <img alt="ML" src={ML} />
              <p className="min">ML</p>
            </NavLink>
          }
        >
          <NavLink activeClassName="sub-nav-active" exact={true} to="/ML">
            <img alt="Upload" src={Upload} />
            <p className="min">Setup</p>
          </NavLink>
          <NavLink
            activeClassName="sub-nav-active"
            exact={true}
            to="/ML/archive"
          >
            <img alt="Archive" src={Archive} />
            <p className="min">Archive</p>
          </NavLink>
        </Collapsible>
      </NavLink>
      <NavLink activeClassName="nav-active" to="/AttritionList">
        <img alt="Attrition" src={Attrition} />
        <p className="min">Attrition list</p>
      </NavLink>
      <NavLink activeClassName="nav-active" to="/Notes">
        <img alt="Notes" src={Notes} />
        <p className="min">Notes</p>
      </NavLink>
      <NavLink className="nav-parent" activeClassName="nav-active" to="/Users">
        <Collapsible
          className="nav-collapsible"
          trigger={
            <NavLink activeClassName="nav-active" to="/Users">
              <img alt="Users" src={Users} />
              <p className="min">Users</p>
            </NavLink>
          }
        >
          <NavLink activeClassName="sub-nav-active" exact={true} to="/Users">
            <img alt="UsersList" src={UsersList} />
            <p className="min">List of users</p>
          </NavLink>
          <NavLink activeClassName="sub-nav-active" exact={true} to="/Manage">
            <img alt="Roles" src={Roles} />
            <p className="min">Manage roles</p>
          </NavLink>
        </Collapsible>
      </NavLink>
      <span className="hr_line"></span>
      <menu onClick={() => handleLogout()}>
        <img className="min-icon" src={Logout} alt="minimize" />
        <p className="min">Log out</p>
      </menu>
    </div>
  );
};
export default SuAdminSidebar;
