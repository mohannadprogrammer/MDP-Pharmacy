import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Views/Login";

import Sales from "./Views/Sales";
import Dashboard from "./Views/Dashboard";
import Items from "./Views/Item"
import Stores from "./Views/Stores"
import Users from "./Views/User"
import suppliers from "./Views/supplier"
import Stock from "./Views/stock"
import Buy from "./Views/invoice"
import manageInvoice from "./Views/allInvoice"
import invoiceDetail from "./Views/invoiceDetail"


//report commponents 
import StoreReport from './Views/reports/Store'
//it a moduals contant all routes in the app

class router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/Sales" exact component={Sales} />
                <Route path="/buy" exact component={Buy} />
                <Route path="/manageInvoice" exact component={manageInvoice} />
                <Route path="/items" exact component={Items} />
                <Route path="/stores" exact component={Stores} />
                <Route path="/suppliers" exact component={suppliers} />
                <Route path="/users" exact component={Users} />

                <Route path="/stores/storeDetail/:id" exact component={Stock} />
                <Route path="/invoice/invoiceDetail/:id" exact component={invoiceDetail} />
                <Route path="/reports/store" exact component={StoreReport} />
            </Switch>
        );
    }
}
export default router;
