import React ,{Component} from 'react';

//
import './index.css'

//component :-

import SideBar from "../../components/SideBar"
import NavBar from "../../components/NavBar"
class Dashboard extends Component{
    render(){
        return (
            <div className="wrapper">
                <NavBar></NavBar>
                <SideBar></SideBar>
            </div>
        )
    }
}

export default Dashboard;