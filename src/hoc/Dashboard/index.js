import React ,{Component} from 'react';

//
import './index.css'

//component :-

import SideBar from "../../components/SideBar"
import NavBar from "../../components/NavBar"
import PgFluid from  "../../components/PgFluid"
class Dashboard extends Component{
    render(){
        return (
            <div className="wrapper">
                <NavBar></NavBar>
                <SideBar></SideBar>
                <PgFluid>
                    {this.props.children}
                </PgFluid>
            </div>
        )
    }
}

export default Dashboard;