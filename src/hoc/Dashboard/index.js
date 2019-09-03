import React ,{Component} from 'react';

//
import 'react-notifications/lib/notifications.css';
import './index.css'

//component :-

import SideBar from "../../components/SideBar"
import NavBar from "../../components/NavBar"
import PgFluid from  "../../components/PgFluid"

import {NotificationContainer} from "react-notifications"

import socketIOClient from "socket.io-client";


class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
          response: false,
          endpoint: "http://172.18.130.108:3000"
        };
      }
      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("data", data =>{
            //  this.setState({ response: data })
             console.log(data)
            });
        
      }
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