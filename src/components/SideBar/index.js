import React, { Component } from "react";
//import css 
import "./index.css"

import {
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Nav
}from "reactstrap"
class Dashboard extends Component {

  constructor(props){
      super(props)
      this.state={
        acctive:true,
        item:[
          {
            name : "Dashboard",
            option :[


            ]
          }
          ,{
            name : "Sales",
            option :[
              

            ]
          },{
            name : "Items",
            option :[
              

            ]
          },{
            name : "Stores",
            option :[
              

            ]
          },{
            name : "Users",
            option :[
              

            ]
          }
        ]
      }
  }
  
  render() {
    const items=this.state.item
    return (
        <div className="page-wrapper">
            {/* <ul>
                <li>mohannad</li>
            </ul> */}
            
            <Nav className="ml-auto" navbar>
               {
                 items.map((item,i)=>(
                  <UncontrolledDropdown className ="sideItem"  nav inNavbar>
                    <DropdownToggle style={{color:"black"}}  nav >
                {item.name}
                </DropdownToggle>
                
                <DropdownMenu right >
                {item.option.map((option , i )=>(
                    <DropdownItem>{option.name}</DropdownItem>
                ))}
                </DropdownMenu>
                  </UncontrolledDropdown>
                 ))
               }
                
              </Nav>
        </div>
        );
  }
}

export default Dashboard;
