import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/addInvoice";
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
import { getData } from '../../actions/itemsAction'

import { bindActionCreators } from 'redux'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.getData("item");
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const columns = config.columns;
    const products = this.props.data.items;
    const form = config.form;
    const buttons = config.buttons;
    console.log(this.props)
    return (
      <Dashoard>
        <PHeader PageName="Item" toggle={this.toggle} >
          <Form></Form>
        </PHeader>

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              noDataIndication="Table is Empty"

              striped
              hover
              condensed
              remote
            />
          </Col>
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form data={form} buttons={buttons} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
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
    data: state.items
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getData,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
