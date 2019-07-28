import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./hoc/Dashboard";
//it a moduals contant all routes in the app

class router extends React.Component {
  render() {
    return (
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    );
  }
}
export default router;
