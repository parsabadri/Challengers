import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ML from "./Components/ML/ML";
import MLarchive from "./Components/ML/Components/Archive";
import AttritionList from "./Components/AttritionList/AttritionLits";
import Notes from "./Components/Notes/Notes";
import Users from "./Components/Users/Users";
import Account from "./Components/Account/Account";
import { config } from "../../config";
import axios from "axios";

//this is where we define the user role base on the props we get from the main dashboard
//component. it is passed as props from dashboard to dashboard content(current component)
const DashboardContent = (props) => {
  const [IsSuAdmin, setIsSuAdmin] = useState(false);
  const [IsFirstLogin, setIsFirstLogin] = useState(false);

  useEffect(() => {
    if (props.userRole === "ROLE_ADMIN") {
      setIsSuAdmin(false);
      getAdminMenu();
    } else if (props.userRole === "ROLE_SUPER_ADMIN") {
      setIsSuAdmin(true);
      getSuAdminMenu();
    }
  }, []);
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
        //considering the fact that the 0 index of the URLs array from API is always /ML
        if (res.data.data.menus[0].mainPage === true) {
          setIsFirstLogin(true);
          //considering the fact that the 0 index of the URLs array from API is always /dashboard
        } else if (res.data.data.menus[2].mainPage === true) {
          setIsFirstLogin(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Here, we define the routes of each role based on their access level, we check wether
  //the user is admin or super admin. Then we return the routes.
  if (IsSuAdmin) {
    return (
      <Switch>
        <Route path="/" exact={true}>
          <Home IsFirstLogin={IsFirstLogin} />
        </Route>
        <Route path="/ML" exact={true} component={ML} />
        <Route path="/ML/archive" exact={true} component={MLarchive} />
        <Route path="/AttritionList" exact={true} component={AttritionList} />
        <Route path="/Notes" exact={true} component={Notes} />
        <Route path="/Users" exact={true} component={Users} />
        <Route path="/Account" exact={true} component={Account} />
      </Switch>
    );
  } else if (!IsSuAdmin) {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/AttritionList" exact={true} component={AttritionList} />
        <Route path="/Notes" exact={true} component={Notes} />
        <Route path="/Account" exact={true} component={Account} />
      </Switch>
    );
  }
};
export default DashboardContent;
