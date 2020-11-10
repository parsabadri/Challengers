import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ManageRoles from "./Components/ManageRoles";
import ListOfUsers from "./Components/ListOfUsers";

const Users = () => {
  return (
    <BrowserRouter basename="/dashboard/UsersList">
      <Switch>
        <Route path="/" component={ListOfUsers} />
        <Route path="/Manage" exact={true} component={ManageRoles} />
      </Switch>
    </BrowserRouter>
  );
};
export default Users;
