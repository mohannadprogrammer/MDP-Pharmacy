import React ,{Component} from 'react';

//
import 'react-notifications/lib/notifications.css';
import './index.css'

//component :-

import SideBar from "../../components/SideBar"
import NavBar from "../../components/NavBar"
import PgFluid from  "../../components/PgFluid"

import { NotificationManager } from "react-notifications";
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
      componentDidMount()  {
        this.socket()
        
      }
      socket =async()=>{
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        await socket.on("notification", data =>{
             
             for(let i=0;i<data.length;i++){
                let msg='<h4>';
                 msg=data[i].generalname +" item ";
                 if(data[i].type ==="exp")
                     msg+="had been expired"
                 else
                     msg+="had reach minumam level "
                 msg+=" in store : "+data[i].name
     
                 NotificationManager.info(msg)
             }
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
                <NotificationContainer style={{width:"500px"}}/>
            </div>
        )
    }
}

export default Dashboard;