import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ML from "./Components/ML/ML";
import AttritionList from "./Components/AttritionList/AttritionLits";
import Notes from "./Components/Notes/Notes";
import Users from "./Components/Users/Users";
import Account from "./Components/Account/Account";

//this is where we define the user role base on the props we get from the main dashboard
//component. it is passed as props from dashboard to dashboard content(current component)
const DashboardContent = (props) => {
  const [IsSuAdmin, setIsSuAdmin] = useState(false);

  useEffect(() => {
    if (props.userRole === "ROLE_ADMIN") {
      setIsSuAdmin(false);
    } else if (props.userRole === "ROLE_SUPER_ADMIN") {
      setIsSuAdmin(true);
    }
  }, []);

  //Here, we define the routes of each role based on their access level, we check wether
  //the user is admin or super admin. Then we return the routes.
  if (IsSuAdmin) {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/ML" exact={true} component={ML} />
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
