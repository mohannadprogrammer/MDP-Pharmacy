import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/UserForm";
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


import {connect} from 'react-redux'
import {getData , add} from '../../actions/itemsAction'
import {bindActionCreators} from 'redux'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
     
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    this.props.getData("users");
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addfun = (user) => {
    console.log('collaback')
    console.log(user)
    this.props.add(user)
  }
  render() {
    const columns = config.columns;
    const products =this.props.data.items;
    const form = config.form;
    const buttons = config.buttons;
    return (
      <Dashoard>
        <PHeader PageName="User" toggle={this.toggle}  >
            <Form data={form} buttons={buttons} add={this.addfun} />
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
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add user</ModalHeader>
          <ModalBody>
            <Form data={form} buttons={buttons} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.add}>
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
    data: state.items
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getData,add
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);


