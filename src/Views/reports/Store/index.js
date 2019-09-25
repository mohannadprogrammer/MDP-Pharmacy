import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../../hoc/Dashboard";
import "./index.css";
import Form from "../../../components/Forms/Fliters/stockStatus";
import PHeader from "../../../components/PHeader";

import {
  Row,
  Col
} from "reactstrap";

import config from "./config";


import { connect } from 'react-redux'
import { getStockData } from '../../../actions/itemsAction'
import { bindActionCreators } from 'redux'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "startDate":"2019-01-01",
      "endDate":"2019-12-30",
      "storeid":"36"
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  addfun = (user) => {
    this.props.add(user)
  }
  render() {
   
    const columns = config.columns;
    let products = this.props.data.report.stockStatus;
    
    return (
      <Dashoard>
        
        <div
          style={{ height: "100%", width: "100%" }}
          className="container"
        >
        <br/>
        <PHeader PageName={config.home} toggle={this.toggle} >
            <Form  add={this.addfun} ></Form>
        </PHeader>
            
        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              noDataIndication="Table is Empty"
            />
          </Col>
        </Row></div>

      </Dashoard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getStockData,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);

