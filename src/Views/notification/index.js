import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/UserForm";
import PHeader from "../../components/PHeader";

import FontAwesome from "react-fontawesome"
import {
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, FormGroup, Input, Label, FormFeedback, Badge
} from "reactstrap";


import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { connect } from "react-redux";
import { getData, add, update, deleteUserAction } from "../../actions/userAction";
import { bindActionCreators } from "redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };

    this.toggle = this.toggle.bind(this);
  }
 
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const mini = [
      {
        dataField: 'username',
        text: 'Scientific name'
      },
      {
        dataField: 'General name',
        text: 'General name'
      }, {
        dataField: 'Store',
        text: 'Store'
      }, {
        text: 'Control',
        headerStyle: {
          width: "130px"
        },
        formatter: (cellCnotent, row) => {
            return (
                <div>
                    <Button color="primary"> add</Button>
                </div>
                
              
            );
          }
      }

    ];
    const expired = [
      {
        dataField: 'username',
        text: 'Scientific name'
      },
      {
        dataField: 'General name',
        text: 'General name'
      }, {
        dataField: 'Store',
        text: 'Store'
      }
      , {
        dataField: 'Store',
        text: 'Patch'
      },
      {
        text: 'Control',
        headerStyle: {
          width: "130px"
        },
        formatter: (cellCnotent, row) => {
            return (
                <div>
                    <Button color="danger"> dispatch</Button>
                </div>
                
              
            );
          }
      }

    ]
    let miniData = [{}]//this.props.data.items;
    let expiredData = [{}]//this.props.data.items;

    return (
      <Dashoard>
        <PHeader PageName="handle Notification" toggle={this.toggle}>
        </PHeader>

        <Row>
          {" "}

          <Col sm={12} className="contants">
            <h2>Items reach minimm level</h2>
            <br />
            <BootstrapTable
              keyField="id"
              data={miniData}
              columns={mini}
              noDataIndication="Table is Empty"
              striped
              hover
              condensed
              pagination={paginationFactory()}
            />
          </Col>
          <Col sm={12} className="contants">
            <h2>Expiered Items</h2>
            <br />
            <BootstrapTable
              keyField="id"
              data={expiredData}
              columns={expired}
              noDataIndication="Table is Empty"
              striped
              hover
              condensed
              pagination={paginationFactory()}
            />
          </Col>
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Update user</ModalHeader>
          <ModalBody>

          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>
      </Dashoard>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getData, add, update, deleteUserAction }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
