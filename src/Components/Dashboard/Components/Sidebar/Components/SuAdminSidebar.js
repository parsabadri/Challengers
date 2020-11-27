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
import Close from "../../../../../Assets/Images/Icons/Close.svg";
import Collapsible from "react-collapsible";

const SuAdminSidebar = (props) => {
  const [SidebarMinimized, setSidebarMin] = useState(false);
  const [MobileMenu, setMobileMenu] = useState({ isOpen: false });

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
      setTimeout(() => {
        document
          .getElementById("sidebar")
          .classList.remove("sidebar-minimiezd");
      }, 280);
    }
  };
  //the following two functions handle navbar open and close on mobile devices
  const closeMobileMenu = () => {
    document.getElementById("sidebar").style.transform = "translateY(-90vh)";
    //the timeouts are only set in order to prevent any style conflicts related to position change
    setTimeout(() => {
      document.getElementById("sidebar").style.position = "absolute";
      document.getElementById("sidebar").style.backgroundColor = "transparent";
      setMobileMenu({ isOpen: false });
    }, 650);
  };
  const openMobileMenu = () => {
    setMobileMenu({ isOpen: true });
    document.getElementById("sidebar").style.position = "unset";
    setTimeout(() => {
      document.getElementById("sidebar").style.backgroundColor = "#ffffff";
      document.getElementById("sidebar").style.transform = "none";
    }, 150);
  };
  return (
    <div id="sidebar" className="sidebar">
      <button
        onClick={() => closeMobileMenu()}
        className="mobile-sidebar-close mobile-only"
      >
        <img src={Close} />
      </button>
      <section className="app-name navbar-brand desktop-only">
        <p className="min-name">
          <h5>P</h5>
        </p>
        <p className="min">PILOT PROJECT</p>
      </section>
      <button className="minimizer" onClick={() => MinimizeSidebar()}>
        <img id="minimize-icon" src={Minimize} alt="minimize" />
      </button>
      <div className="account desktop-only">
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
        <img className="desktop-only" alt="home" src={Home} />
        <p className="min">Home</p>
      </NavLink>
      <NavLink
        id="ml-link"
        className="nav-parent"
        activeClassName="nav-active"
        to="/ML"
      >
        <Collapsible
          className="nav-collapsible desktop-only"
          trigger={
            <NavLink activeClassName="nav-active" to="/ML">
              <img className="desktop-only" alt="ML" src={ML} />
              <p className="min">ML</p>
            </NavLink>
          }
        >
          <NavLink activeClassName="sub-nav-active" exact={true} to="/ML">
            <img className="desktop-only" alt="Upload" src={Upload} />
            <p className="min">Setup</p>
          </NavLink>
          <NavLink
            activeClassName="sub-nav-active"
            exact={true}
            to="/ML/archive"
          >
            <img className="desktop-only" alt="Archive" src={Archive} />
            <p className="min">Archive</p>
          </NavLink>
        </Collapsible>
      </NavLink>
      <NavLink activeClassName="nav-active" to="/AttritionList">
        <img className="desktop-only" alt="Attrition" src={Attrition} />
        <p className="min">Attrition Details</p>
      </NavLink>
      <NavLink activeClassName="nav-active" to="/Notes">
        <img className="desktop-only" alt="Notes" src={Notes} />
        <p className="min">Notes</p>
      </NavLink>
      <NavLink className="nav-parent" activeClassName="nav-active" to="/Users">
        <Collapsible
          className="nav-collapsible"
          trigger={
            <NavLink activeClassName="nav-active" to="/Users">
              <img className="desktop-only" alt="Users" src={Users} />
              <p className="min">Users</p>
            </NavLink>
          }
        >
          <NavLink activeClassName="sub-nav-active" exact={true} to="/Users">
            <img className="desktop-only" alt="UsersList" src={UsersList} />
            <p className="min">List of users</p>
          </NavLink>
          <NavLink activeClassName="sub-nav-active" exact={true} to="/Manage">
            <img className="desktop-only" alt="Roles" src={Roles} />
            <p className="min">Manage roles</p>
          </NavLink>
        </Collapsible>
      </NavLink>
      <span className="hr_line desktop-only"></span>
      <menu onClick={() => handleLogout()}>
        <img
          className="desktop-only"
          className="min-icon desktop-only"
          src={Logout}
          alt="minimize"
        />
        <p className="min">Log out</p>
      </menu>
      <p className="fixed-trigger mobile-only" onClick={() => openMobileMenu()}>
        okjbl;
      </p>
    </div>
  );
};
export default SuAdminSidebar;
