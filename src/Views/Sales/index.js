import React from "react";
import { Row } from "reactstrap";

import Dashboard from "../../hoc/Dashboard";
import PHeader from "../../components/PHeader";
//sales component
import Bill from "../../components/SalesComponent/Bill";
import Info from "../../components/SalesComponent/Info";
//it a moduals contant all routes in the app

class Sales extends React.Component {
  constructor (props){
    super(props)
    this.state={
      row:{}
    }
  }
  passToBill= (row)=>{
    this.setState({
      row:row
    })
    console.log("uvsk")
  }
  render() {
    return (
      <Dashboard>
        <PHeader PageName="Sales" toggle={this.toggle} button />
        <Row>
          <Info passToBill={this.passToBill.bind()}/>
          <Bill row={this.state.row}/>
        </Row>
      </Dashboard>
    );
  }
}
export default Sales;
