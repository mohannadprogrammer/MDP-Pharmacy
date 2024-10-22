import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

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

import config from "./config";

import { connect } from "react-redux";
import { getInvoiceDetailsAction, rejectInvoiceAction } from "../../actions/invoiceAction";
import { bindActionCreators } from "redux";
import Pdf from "react-to-pdf";
import { async } from "q";
const ref = React.createRef();

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceDetails: {

        "id": "",
        "trandate": "",
        "transtype": "",
        "creater": "",
        "name": " ",
        "invoiceItems": [
          {

          }
        ]
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentWillMount() {
    this.props.getInvoiceDetailsAction(this.props.match.params.id);

  }
  render() {
    console.log(
      this.props.data.items.invoiceDetails,
      "*********************************"
    );

    const columns = config.columns;
    let products = this.props.data.items.invoiceDetails.invoiceItems;
    const res = this.props.data.items.invoiceDetails;
    return (
      <Dashoard>
        {/* <Pdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <Button onClick={toPdf} color="success">
              print pdf
            </Button>
          )}
        </Pdf> */}
        <div
          ref={ref}
          style={{ height: "100%", width: "100%" }}
          className="container"
        >
          <br />
          <PHeader PageName="Invioce Details" toggle={this.toggle} isReturn={res.isreturned}>
            <hr />
            <Row>
              <Col sm={6}>
                <h5>invoice id :{res.id}</h5>
              </Col>
              <Col sm={6}>
                <h5>creater : {res.creater}</h5>

              </Col>
              <Col sm={6}>
                <h5>Store : {res.name}</h5>
              </Col>
              <Col sm={6}>
                <h5>date : {res.trandate}</h5>
              </Col>
            </Row>
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
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Confirm return invoice{" "}
          </ModalHeader>
          <ModalBody>
            <p>Are Sure that u wont to return this invoice ? </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={async() => {
              await this.props.rejectInvoiceAction(this.props.data.items.invoiceDetails.id)
              this.props.getInvoiceDetailsAction(this.props.match.params.id);
              this.toggle();
            }}>
              Yes
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

const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getInvoiceDetailsAction,
      rejectInvoiceAction
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
