import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/itemsAction";
import { getItemToSaleAction, saleAction } from "../../actions/salesAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button ,UncontrolledCollapse} from "reactstrap";

//import
import BootstrapTable from "react-bootstrap-table-next";
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: {
        id: "",
        quantity: "",
        expiredate: ""
      },
      transtype: "add",
      storeid: "",
      supplierid: "",
      itemsDetail: [
      ]
    };
  }
  componentDidMount() {
    this.props.getData("store");

    this.props.getData("item");
    this.props.getData("supplier");
  }
  add2Invoice = () => {
    console.log(this.state.temp);
    this.setState({
        itemsDetail:[...this.state.itemsDetail,this.state.temp]
    })
    // this.state.itemsDetail.push(this.state.temp);
    console.log(this.state, ",,,,,,,,,,,,,,,,,,,");
  };
  submit = e => {
      let {temp , ...reset} =this.state
    console.log(reset);

    this.props.saleAction(reset);
  };
  setData = e => {
    switch (e.target.name) {
      case "storeid":
        this.setState({
          storeid: e.target.value
        });
        break;
      case "supplierid":
        this.setState({
          supplierid: e.target.value
        });
        break;
      case "items":
        this.setState({
          ...this.state,
          temp: {
            ...this.state.temp,
            id: e.target.value,
            name: this.props.data.items.items[e.target.value].generalname
          }
        });
        break;
      case "quantity":
        let price =
          this.props.data.items.items[this.state.temp.id].price * e.target.value;
        this.setState({
          ...this.state,
          temp: { ...this.state.temp, quantity: e.target.value, price }
        });
        break;
      case "expiredate":
        this.setState({
          ...this.state,
          temp: { ...this.state.temp, expiredate: e.target.value }
        });
        break;
      default:
    }
  };
  render() {
    console.log(this.props.data);
    const supplier = this.props.data.items.suppliers;
    const store = this.props.data.items.stores;
    const items = this.props.data.items.items;
    return (
      <div>
          
        <UncontrolledCollapse toggler="#toggler">
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>store</Label>
              <Input
                type="select"
                placeholder="username"
                name="storeid"
                onChange={this.setData.bind()}
              >
                <option placeholder="select :">select please</option>
                <hr />
                {store.map((store, i) => {
                  return (
                    <option key={i} value={store.id}>
                      {store.name}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>supplier</Label>
              <Input
                type="select"
                name="supplierid"
                onChange={this.setData.bind()}
              >
                {supplier.map((supplier, i) => {
                  return (
                    <option key={i} value={supplier.id}>
                      {supplier.name}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
          <hr />
        </Row>
        <hr />
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label>items</Label>
              <Input type="select" name="items" onChange={this.setData.bind()}>
                {items.map((item, i) => {
                  return (
                    <option key={i} value={item.id}>
                      {item.generalname}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>quatity</Label>
              <Input
                type="number"
                placeholder="0"
                name="quantity"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>date</Label>
              <Input
                type="date"
                name="expiredate"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.add2Invoice}>add to invoice</Button>

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={this.state.itemsDetail}
              columns={this.props.c}
              noDataIndication="Table is Empty"
              striped
              hover
              condensed
              remote
            />
          </Col>
          
        <Button onClick={this.submit.bind()}>add invoice</Button>
        </Row>
        </UncontrolledCollapse>
      </div>
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
    { getItemToSaleAction, saleAction, getData },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
