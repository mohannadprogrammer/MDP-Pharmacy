import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
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


import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { connect } from "react-redux";
import { dispose ,addNotificationItem ,getNotification2Handle } from "../../actions/handleNotification";
import { bindActionCreators } from "redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    console.log("alksdfsdfjlaksddjflkajsddlfkjasldkf")
    this.props.getNotification2Handle();
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const mini = [
      {
        dataField: 'tradname',
        text: 'Scientific name'
      },
      {
        dataField: 'generalname',
        text: 'General name'
      }, {
        dataField: 'name',
        text: 'Store'
      }, {
        text: 'Control',
        headerStyle: {
          width: "130px"
        },
        formatter: (cellCnotent, row) => {
            return (
                <div>
                    <Button color="primary" onClick={()=>{
                      this.props.addNotificationItem(row)
                    }}> add</Button>
                </div>
                
              
            );
          }
      }

    ];
    
    let miniData = this.props.data.mini;
    let expiredData = this.props.data.exp;
    console.log(this.props.data)
    const expired = [
      {
        dataField: 'tradname',
        text: 'Scientific name'
      },
      {
        dataField: 'generalname',
        text: 'General name'
      }, {
        dataField: 'name',
        text: 'Store'
      }
      , {
        dataField: 'batch',
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
                    <Button color="danger" onClick={()=>{
                      this.props.dispose(row,row.id)
                    }}> dispose</Button>
                </div>
                
              
            );
          }
      }

    ];
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
          <ModalHeader toggle={this.toggle}>handle resualt</ModalHeader>
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
    data: state.notification
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({  dispose ,addNotificationItem ,getNotification2Handle  }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
