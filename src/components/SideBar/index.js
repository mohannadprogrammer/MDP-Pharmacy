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
import FontAwesome from "react-fontawesome";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acctive: true,
      item: [
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: "bar-chart",
          option: []
        },
        {
          name: "Sales",
          link: "/Sales",
          icon: "calculator",
          option: []
        },
        {
          name: "Buy",
          link: "/buy",
          icon: "cog",
          option: []
        },

        {
          name: "Manage Invoice",
          link: "/manageInvoice",
          icon: "cog",
          option: []
        },
        {
          name: "Reports",
          link: "/manageInvoice",
          icon: "database",
          option: [
            {
              name: "Stores",
              link: "/reports/store",
              icon: "database"
            },
            {
              name: "invoice",
              link: "/manageInvoice",
              icon: "database"
            },
            {
              name: "Sales",
              link: "/manageInvoice",
              icon: "database"
            }
          ]
        },
        {
          name: "Setting",
          link: "/manageInvoice",
          icon: "cog",
          option: [
            {
              name: "Items",
              link: "/items",
              icon: "database"
            },
            {
              name: "Stores",
              link: "/stores",
              icon: "database"
            },
            {
              name: "Users",
              link: "/users",
              icon: "id-card"
            },
            {
              name: "Suppliers",
              link: "/suppliers",
              icon: "database"
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
              <h5><Link to={item.link}>
                  <FontAwesome
                    name={item.icon}
                    style={{ width: "40px", height: "40px", fontSize: "20px" }}
                  />
                  {item.name}
                </Link></h5>
              </DropdownToggle>

              <DropdownMenu right>
                {item.option.map((option, i) => (
                  <DropdownItem>
                    <FontAwesome
                      name={option.icon}
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "20px"
                      }}
                    />
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
