import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms";
import PHeader from "../../components/PHeader";

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
import { getStockData } from '../../actions/itemsAction'
import { bindActionCreators } from 'redux'


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
    this.props.getStockData(this.props.match.params.id);
  }
  render() {
    console.log(this.props.data.items.stock, "*********************************")
    const columns = config.columns;
    let products = this.props.data.items.stock;
    const form = config.form;
    const buttons = config.buttons;

    
    return (
      <Dashoard>
        <PHeader PageName="Stock" toggle={this.toggle} />

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
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add supplier</ModalHeader>
          <ModalBody>
            <Form data={form} buttons={buttons} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              ADD
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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

