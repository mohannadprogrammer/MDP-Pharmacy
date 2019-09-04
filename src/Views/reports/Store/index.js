import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../../hoc/Dashboard";
import "./index.css";
import Form from "../../../components/Forms/Fliters/stockFilter";
import PHeader from "../../../components/PHeader";

import {
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import config from "./config";


import { connect } from 'react-redux'
import { getStockData } from '../../../actions/itemsAction'
import { bindActionCreators } from 'redux'

import Pdf from "react-to-pdf";
const ref = React.createRef();

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    // this.props.getStockData(this.props.match.params.id);
  }
  render() {
   
    const columns = config.columns;
    let products = [];
    const form = config.form;
    const buttons = config.buttons;
    
    return (
      <Dashoard>
        <Pdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <Button onClick={toPdf} color="success">
              print pdf
            </Button>
          )}
        </Pdf>
        
        <div
          ref={ref}
          style={{ height: "100%", width: "100%" }}
          className="container"
        >
        <br/>
        <PHeader PageName="Stock" toggle={this.toggle} >
            <Form ></Form>
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

