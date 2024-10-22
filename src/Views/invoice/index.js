import React, { Component } from "react";
import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/addInvoice";
import PHeader from "../../components/PHeader";
import {
  Button,
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
    const form = config.form;
    const buttons = config.buttons;    
    return (
      <Dashoard>
        <PHeader PageName="add Invoice" toggle={this.toggle} >
          <Form  c={config.columns}></Form>
        </PHeader>


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
