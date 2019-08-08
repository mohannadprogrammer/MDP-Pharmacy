import React, { Component } from "react";
//import css 
import "./index.css"

import { Link } from 'react-router-dom'
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Nav
} from "reactstrap"
class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      acctive: true,
      item: [
        {
          name: "Dashboard",
          link: "/dashboard",
          option: [


          ]
        }
        , {
          name: "Sales",
          link: "/Sales",
          option: [


          ]
        }, {
          name: "Items",
          link: "/items",
          option: [


          ]
        }, {
          name: "Stores",
          link: "/stores",
          option: [


          ]
        }, {
          name: "Users",
          link: "/users",
          option: [


          ]
        }, {
          name: "Suppliers",
          link: "/suppliers",
          option: [


          ]
        },
        {
          name: "Buy",
          link: "/buy",
          option: [


          ]
        },
        {
          name: "Manage Invoice",
          link: "/manageInvoice",
          option: [

          ]
        }
      ]
    }
  }

  render() {
    const items = this.state.item
    return (
      <div className="page-wrapper">
        {/* <ul>
                <li>mohannad</li>
            </ul> */}

        <Nav className="ml-auto" navbar>
          {
            items.map((item, i) => (
              <UncontrolledDropdown className="sideItem" nav inNavbar>
                <DropdownToggle style={{ color: "black" }} nav >
                  <Link to={item.link}>{item.name}</Link>
                </DropdownToggle>

                <DropdownMenu right >
                  {item.option.map((option, i) => (
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
