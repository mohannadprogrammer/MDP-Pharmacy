import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Views/Login";

import Sales from "./Views/Sales";
import Dashboard from "./Views/supplier";
import Items from "./Views/Item"
import Stores from "./Views/Stores"
import Users from "./Views/User"
import suppliers from "./Views/supplier"
//it a moduals contant all routes in the app

class router extends React.Component {
  render() {
    return (
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          
          <Route path="/Sales" exact component={Sales} />
          <Route path="/items" exact component={Items} />
          <Route path="/stores" exact component={Stores} />
          <Route path="/suppliers" exact component={suppliers} />
          <Route path="/users" exact component={Users} />
      </Switch>
    );
  }
}
export default router;
