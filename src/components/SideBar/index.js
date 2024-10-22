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
    const permission =JSON.parse(localStorage.getItem('permission'));
    
    this.state = {
      acctive: true,
      item: [
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: "bar-chart",
          show: permission.dashboard,
          option: []
        },
        {
          name: "Sales",
          link: "/Sales",
          show: permission.sales,
          icon: "calculator",
          option: []
        },
        {
          name: "Buy",
          show: permission.purchase,
          link: "/buy",
          icon: "cog",
          option: []
        },

        {
          name: "Manage Invoice",
          show: permission.manageinvoice,
          link: "/manageInvoice",
          icon: "cog",
          option: []
        },
        {
          name: "Reports",
          show: permission.reports,
          
          icon: "database",
          option: [
            {
              name: "Stores",
              link: "/reports/store",
              icon: "database"
            },
            {
              name: "Store movements",
              link: "/reports/storemovement",
              icon: "database"
            },
            {
              name: "Sales",
              link: "/reports/salesReport",
              icon: "database"
            }
          ]
        },
        {
          name: "Setting",
          show: permission.setting,
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
              name: "units",
              link: "/unit",
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
            },
            {
              name: "Permission",
              link: "/permission",
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
        

        <Nav className="ml-auto" navbar>
          {items.map((item, i) => (
            <UncontrolledDropdown className="sideItem" nav inNavbar hidden={!item.show}>
              <DropdownToggle style={{ color: "black" }} nav >
              <h6><Link to={item.link} style={{color:"white",fontWeight:"bold"}}>
                  <FontAwesome
                    name={item.icon}
                    style={{ width: "32px", height: "32px" ,color:"#00A697"}}
                  />
                   {item.name} 
                </Link></h6>
              </DropdownToggle>

              <DropdownMenu right>
                {item.option.map((option, i) => (
                  <DropdownItem>
                    <FontAwesome
                      name={option.icon}
                      style={{
                        width: "23px",
                        height: "23px",
                        color:"#00A697"
                      }}
                    />
                    <Link to={option.link} style={{color:"black",fontWeight:"bold"}}>{option.name}</Link>
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
