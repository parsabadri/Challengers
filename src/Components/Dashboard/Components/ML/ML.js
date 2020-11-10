import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Setup from "./Components/Setup";
import Archive from "./Components/Archive";

const MachineLearning = () => {
  return (
    <BrowserRouter basename="/dashboard/ML">
      <Switch>
        <Route path="/" component={Setup} />
        <Route path="/archive" exact={true} component={Archive} />
      </Switch>
    </BrowserRouter>
  );
};
export default MachineLearning;
