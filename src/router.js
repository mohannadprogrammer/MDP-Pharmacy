import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import Login from "./Views/Login";

import Sales from "./Views/Sales";
import Dashboard from "./Views/Dashboard";
import Items from "./Views/Item"
import Stores from "./Views/Stores"
import Users from "./Views/User"
import Suppliers from "./Views/supplier"
import Unit from "./Views/unit"
// import Stock from "./Views/stock"
import Permission from "./Views/Permission"
import Buy from "./Views/invoice"
import ManageInvoice from "./Views/allInvoice"
import InvoiceDetail from "./Views/invoiceDetail"
import HandleNotification from "./Views/notification"


//report commponents 
import StoreReport from './Views/reports/Store'
import StoreMovement from './Views/reports/StoreMoviment'
import SalesReport from './Views/reports/Sales'
import Invoice from "./Views/invoice";
//it a moduals contant all routes in the app

class router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact 
                component={Login} 

                />
                <Route path="/dashboard" exact 
                //component={Dashboard} 
                render={() => (localStorage.getItem('permission').dashboard? <Dashboard /> : <Redirect to ="/Sales"/>)}
                
                />
                <Route path="/Sales" exact 
                // component={Sales}
                render={() => (localStorage.getItem('permission').sales? <Sales /> : <Redirect to ="/buy"/>)}
                
                />
                <Route path="/buy" exact 
                //component={Buy} 
                render={() => (localStorage.getItem('permission').purchase? <Buy /> : <Redirect to ="/manageInvoice"/>)}
                
                />
                <Route path="/manageInvoice" exact 
                //component={manageInvoice} 
                render={() => (localStorage.getItem('permission').manageinvoice? <ManageInvoice/> : <Redirect to ="/items"/>)}
                
                />
                <Route path="/items" exact
                 //component={Items} 
                render={() => (localStorage.getItem('permission').sales? <Items /> : <Redirect to ="/"/>)}
                />
                <Route path="/permission" exact 
                //component={Permission}
                render={() => (localStorage.getItem('permission').sales? <Permission /> : <Redirect to ="/nit"/>)}
                
                />
                <Route path="/unit" exact 
                //component={Unit}
                render={() => (localStorage.getItem('permission').sales? <Unit /> : <Redirect to ="/"/>)}
                 />
                <Route path="/stores" exact 
                //component={Stores}
                render={() => (localStorage.getItem('permission').sales? <Stores /> : <Redirect to ="/"/>)}                
                />
                <Route path="/suppliers" exact 
                //component={suppliers}
                render={() => (localStorage.getItem('permission').sales? <Suppliers /> : <Redirect to ="/"/>)}
                
                />
                <Route path="/users" exact 
                //component={Users}
                render={() => (localStorage.getItem('permission').sales? <Users /> : <Redirect to ="/"/>)}
                 />
                <Route path="/handleNotification" exact
                // component={handleNotification} 
                render={() => (localStorage.getItem('permission').sales? <HandleNotification /> : <Redirect to ="/"/>)}
                
                />
                {/* 
                this route is had be canceled but the code steal existt  
                
                <Route path="/stores/storeDetail/:id" exact 
                //component={Stock} 
                render={() => (localStorage.getItem('permission').sales? <Dashboard /> : <Redirect to ="/"/>)}
                /> */}
                <Route path="/invoice/invoiceDetail/:id" exact 
                //component={invoiceDetail} 
                render={() => (localStorage.getItem('permission').sales? <InvoiceDetail /> : <Redirect to ="/"/>)}
                />
                <Route path="/reports/store" exact 
                //component={StoreReport}
                render={() => (localStorage.getItem('permission').sales? <StoreReport /> : <Redirect to ="/"/>)}
                 />
                <Route path="/reports/storemovement" exact 
                //component={StoreMovement}
                render={() => (localStorage.getItem('permission').sales? <StoreMovement /> : <Redirect to ="/"/>)}
                 />
                <Route path="/reports/salesReport" exact 
                //component={SalesReport}
                render={() => (localStorage.getItem('permission').sales? <SalesReport /> : <Redirect to ="/"/>)}
                
                />


            </Switch>
        );
    }
}
export default router;
