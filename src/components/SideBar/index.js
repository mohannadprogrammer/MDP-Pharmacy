import React, { Component } from "react";
//import css
import "./index.css";

import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Nav
} from "reactstrap";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acctive: true,
      item: [
        {
          name: "Dashboard",
          link: "/dashboard",
          option: []
        },
        {
          name: "Sales",
          link: "/Sales",
          option: []
        },
        {
          name: "Buy",
          link: "/buy",
          option: []
        },

        {
          name: "Manage Invoice",
          link: "/manageInvoice",
          option: []
        },
        {
          name: "Reports",
          link: "/manageInvoice",
          option: [
            {
              name: "Stores",
              link: "/reports/store"
            },
            {
              name: "invoice",
              link: "/manageInvoice"
            },
            {
              name: "Sales",
              link: "/manageInvoice"
            }
          ]
        },
        {
          name: "Setting",
          link: "/manageInvoice",
          option: [
            {
              name: "Items",
              link: "/items"
            },
            {
              name: "Stores",
              link: "/stores"
            },
            {
              name: "Users",
              link: "/users"
            },
            {
              name: "Suppliers",
              link: "/suppliers"
            }
          ]
        }
      ]
    };
  }

  render() {
    const items = this.state.item;
    return (
      <div className="page-wrapper">
        {/* <ul>
                <li>mohannad</li>
            </ul> */}

        <Nav className="ml-auto" navbar>
          {items.map((item, i) => (
            <UncontrolledDropdown className="sideItem" nav inNavbar>
              <DropdownToggle style={{ color: "black" }} nav>
                <Link to={item.link}>{item.name}</Link>
              </DropdownToggle>

              <DropdownMenu right>
                {item.option.map((option, i) => (
                  <DropdownItem>
                    <Link to={option.link}>{option.name}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          ))}
        </Nav>
      </div>
    );
  }
}

export default Dashboard;
