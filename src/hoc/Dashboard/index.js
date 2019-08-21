import React ,{Component} from 'react';

//
import 'react-notifications/lib/notifications.css';
import './index.css'

//component :-

import SideBar from "../../components/SideBar"
import NavBar from "../../components/NavBar"
import PgFluid from  "../../components/PgFluid"

import {NotificationContainer} from "react-notifications"



class Dashboard extends Component{
    render(){
        return (
            <div className="wrapper">
                <NavBar></NavBar>
                <SideBar></SideBar>
                <PgFluid>
                    {this.props.children}
                </PgFluid>
                <NotificationContainer/>
            </div>
        )
    }
}

export default Dashboard;