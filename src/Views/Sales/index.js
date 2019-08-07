import React from "react";
import { Row } from "reactstrap";

import Dashboard from "../../hoc/Dashboard";
import PHeader from "../../components/PHeader";
//sales component
import Bill from "../../components/SalesComponent/Bill";
import Info from "../../components/SalesComponent/Info";
//it a moduals contant all routes in the app

class Sales extends React.Component {
  render() {
    return (
      <Dashboard>
        <PHeader PageName="Sales" toggle={this.toggle} button />
        <Row>
          <Info />
          <Bill />
        </Row>
      </Dashboard>
    );
  }
}
export default Sales;
