import React from "react";

import { Col, Row, FormGroup, Input, Button, Alert } from "reactstrap";
import Dashboard from "../../hoc/Dashboard";
import PHeader from "../../components/PHeader";
//sales component
import BootstrapTable from "react-bootstrap-table-next";
//it a moduals contant all routes in the app
import "./index.css";
import { connect } from "react-redux";
import { getData } from "../../actions/itemsAction";
import {
  getItemToSaleAction,
  saleAction,
  deleteFromSaleBill
} from "../../actions/salesAction";
import { bindActionCreators } from "redux";

import FontAwesome from "react-fontawesome";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transtype: "sale",
      itemsDetail: [],
      storeid: 0,
      discount: 0,
      visible: false,
      complete: false,
      errmsg: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }
  getItems = e => {
    this.props.getItemToSaleAction(this.state);
    e.target.value = null;
  };
  componentDidMount() {
    this.props.getData("store");
  }
  pay = () => {
    console.log(this.props.data.sales.requist.itemsDetail.length);
    if (this.props.data.sales.requist.itemsDetail.length !== 0) {
      this.props.saleAction(this.props.data.sales.requist, this.state.storeid);
      this.setState({ complete: true });
    } else {
      var errmsg = "";
      if (this.state.storeid === 0) {
        errmsg += "store undetected  and ,";
      }
      errmsg += "there is no items add to sales ";
      this.setState({ visible: true, complete: false, errmsg });
    }
  };
  setData = async e => {
    switch (e.target.name) {
      case "store":
        this.setState({
          storeid: e.target.value
        });
        break;
      case "barcode":
        await this.setState({
          barcode: e.target.value,
          visible: false,
          complete: false
        });
        break;
      default:
    }
  };
  render() {
    const columns = [
      {
        dataField: "generalname",
        text: "sceintN"
        // editable: (content, row, rowIndex, columnIndex) => columnIndex < 0
      },
      {
        dataField: "tradname",
        text: "generalN"
      },
      {
        dataField: "available",
        text: "available"
      },
      {
        dataField: "quantity",
        text: "quantity",
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue)) {
            return {
              valid: false,
              message: "quantity should be numeric"
            };
          }

          return true;
        }
      }
    ];

    console.log("salse :", this.props.data.sales.sales);
    let products = this.props.data.sales.requist.itemsDetail;
    let stores = this.props.data.items.stores;
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        confirmAlert({
          title: "remove item from sale list ?",
          message: "Are you sure to do this.",
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                this.props.deleteFromSaleBill(rowIndex);
              }
            },
            {
              label: "No"
            }
          ]
        });
      }
    };
    return (
      <Dashboard>
        <PHeader PageName="Sales" toggle={this.toggle} button />
        <Row>
          {/* <Info passToBill={this.passToBill.bind()}/> */}
          <Col className=" info">
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="select"
                    placeholder="username"
                    name="store"
                    onChange={this.setData.bind(this)}
                  >
                    <option>Select Store :</option>;
                    {stores.map((store, i) => {
                      return <option value={store.id}>{store.name}</option>;
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="barecode"
                    name="barcode"
                    onChange={this.setData.bind()}
                    onKeyUp={this.getItems.bind(this)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <Button
                  onClick={this.pay.bind(this)}
                  color="success"
                  style={{ float: "right" }}
                >
                  payed
                </Button>
              </Col>
            </Row>
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              noDataIndication="Table is Empty"
              striped
              hover
              condensed
              rowEvents={rowEvents}
            />
            <Alert
              color="danger"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              {this.state.errmsg + "  "}
              <FontAwesome
                name="thumbs-down"
                style={{
                  fontSize: "20px"
                }}
              />
            </Alert>
            <Alert
              color="success "
              isOpen={this.state.complete}
              style={{ float: "left" }}
            >
              {"saled  "}
              <FontAwesome
                name="thumbs-up"
                style={{
                  fontSize: "20px"
                }}
              />
            </Alert>
          </Col>
        </Row>
      </Dashboard>
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
    { getItemToSaleAction, saleAction, getData, deleteFromSaleBill },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sales);
