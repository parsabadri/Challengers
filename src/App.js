import React from "react";
import Login from "./Components/Login/Login";
import PasswordReset from "./Components/ResetPassword/ResetPassword";
import Verify from "./Components/ResetPassword/Verify";
import NewPassword from "./Components/ResetPassword/NewPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Page404 from "./Components/404Page/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Assets/Styles/App.css";
import "./Assets/Styles/_app.scss";

//the primary and public routes and their components are here, this is basically the root
//of our app tree!

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/ResetPass" exact={true} component={PasswordReset} />
          <Route
            path="/ResetPass/NewPassword/:id"
            exact={true}
            component={NewPassword}
          />
          <Route path="/ResetPass/Verify/:id" component={Verify} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route path="*" exact={true} component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
