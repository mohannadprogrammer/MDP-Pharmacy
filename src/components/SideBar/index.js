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
        acctive:true
      }
  }
  render() {
    return (
        <div className="page-wrapper">
            {/* <ul>
                <li>mohannad</li>
            </ul> */}
            
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown className ={ this.state.acctive ?"sideItem active":"sideItem"}  nav inNavbar>
                <DropdownToggle style={{color:"black"}}  nav >
                Dashboard
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <UncontrolledDropdown className ="sideItem" nav inNavbar>
                <DropdownToggle  style={{color:"black"}}  nav >
                Sales
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown className ="sideItem" nav inNavbar>
                <DropdownToggle style={{color:"black"}}  nav >
                  Stores
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Optio2112n 1</DropdownItem>
                  <DropdownItem>Option21 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
        </div>
        );
  }
}

export default Dashboard;
