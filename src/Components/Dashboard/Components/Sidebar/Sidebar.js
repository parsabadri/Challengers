import React, { useState, useEffect } from "react";
import User from "../../../../Assets/Images/Icons/User.svg";
import "../../../../Assets/Styles/Sidebar.scss";
import AdminSidebar from "./Components/AdminSidebar";
import SuAdminSidebar from "./Components/SuAdminSidebar";

const Sidebar = (props) => {
  const [UserInfo, setUserInfo] = useState([
    {
      name: "Parsa Badri",
      username: "parsabadri",
      avatar: User,
    },
  ]);
  useEffect(() => {}, []);
  if (props.userRole === "ROLE_SUPER_ADMIN") {
    return <SuAdminSidebar UserInfo={UserInfo} />;
  } else if (props.userRole === "ROLE_ADMIN") {
    return <AdminSidebar UserInfo={UserInfo} />;
  }
};
export default Sidebar;
