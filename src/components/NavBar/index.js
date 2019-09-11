import React, { Component } from "react";
//import css
import "./index.css";
//bootstrap components
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

//my components
import Expired from "./NotifyCard/expired";
import MinLeve from "./NotifyCard/minLeve";
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const notifications = [
      {
        type: "minlevel",
        item: "pandol",
        store: "modroman",
        patch: "19398729",
        isread: true
      },
      {
        type: "exp",
        item: "pandol",
        store: "modroman",
        patch: "19398729",
        isread: true
      }
    ];
    return (
      <div>
        <Navbar className="nav-style" expand="md">
          <NavbarBrand>
            Pharmacy
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FontAwesome
                    name="bell-o"
                    style={{
                      width: "32px",
                      height: "32px",
                      fontSize: "26px",
                      color: "#00A697"
                    }}
                  />
                </DropdownToggle>
                <DropdownMenu right className="noti-menu">
                  <h4 style={{ padding: "4px 24px" }}>
                    <FontAwesome
                      name="list"
                      style={{
                        width: "32px",
                        height: "32px",
                        fontSize: "26px",
                        color: "#00A697"
                      }}
                    />{" "}
                    Notification
                  </h4>
                  <DropdownItem divider />
                  {notifications.map((noti, i) => (
                    <DropdownItem>
                      {
                        noti.type==="minlevel"?
                        <MinLeve notify={noti}/>:<Expired notify={noti} />
                      }
                      
                    </DropdownItem>
                  ))}

                  {/* <DropdownItem>Reset</DropdownItem> */}
                  <Button style={{width:"100%", height:"50px"}}>load more ></Button>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
                <DropdownToggle
                  style={{ background: "#2A2A2A", borderColor: "#2A2A2A" }}
                >
                  <Link to="/">
                    {" "}
                    <FontAwesome
                      name="sign-out"
                      style={{
                        width: "32px",
                        height: "32px",
                        fontSize: "26px",
                        color: "#00A697"
                      }}
                    />
                  </Link>
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
