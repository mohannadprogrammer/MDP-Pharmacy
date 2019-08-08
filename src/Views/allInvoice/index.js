import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms";
import PHeader from "../../components/PHeader";

import { Redirect } from "react-router-dom";

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
import { getAllInvoice } from '../../actions/itemsAction'
import { bindActionCreators } from 'redux'


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: null
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.getAllInvoice();
    console.log(this.props)
    console.log("*($*$($($($($$")
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    if (this.state.id) {
      return (
        <Redirect to={"/invoice/invoiceDetail/" + this.state.id} />
      )
    }
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(row)
        this.setState({
          id: row.id
        })
      }
    };
    const columns = config.columns;
    const products = this.props.data.items.invoice;
    const form = config.form;
    const buttons = config.buttons;
    return (
      <Dashoard>
        <PHeader PageName="Inovice" toggle={this.toggle} />

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              rowEvents={rowEvents}
              noDataIndication="Table is Empty"
            />
          </Col>
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add STORE</ModalHeader>
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
    getAllInvoice,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
