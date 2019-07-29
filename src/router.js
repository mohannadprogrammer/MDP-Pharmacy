import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./Views/supplier";
import Items from "./Views/Item"
//it a moduals contant all routes in the app

class router extends React.Component {
  render() {
    return (
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/items" exact component={Items} />
          <Route path="/stores" exact component={Items} />
          <Route path="/suppliers" exact component={Items} />
          <Route path="/users" exact component={Items} />
      </Switch>
    );
  }
}
export default router;
