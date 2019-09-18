import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/itemsAction";
import { addInvoice } from "../../actions/invoiceAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button, UncontrolledCollapse, Alert } from "reactstrap";
import FontAwesome from 'react-fontawesome'

//import
import BootstrapTable from "react-bootstrap-table-next";
import { async } from "q";
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: {
        id: "",
        price: 0,
        quantity: 0,
        expiredate: "",
        visible: false,
        errmsg: "select item and complete form to add to invoice "
      },
      transtype: "add",
      storeid: "",
      supplierid: "",
      itemsDetail: [
      ],
      visible: false,
      complete: false,
      errmsg: ""
    };
  }
  validation() {
    var { id, price, quantity, expiredate } = this.state.temp;
    console.log(this.state.itemsDetail.find(o=>o.id === id),"lskdflksd")
    if (id === ""
      || price < 0
      || quantity < 0
      || expiredate === ""
      || this.state.itemsDetail.find(o=>o.id === id)
      ) {
      this.setState({
        temp: {
          ...this.state.temp,
          visible: true
        }
      });
      if(this.state.itemsDetail.find(o=>o.id === id))
      this.setState({
        temp: {
          ...this.state.temp,
          visible: true,
          errmsg:"this item added already"
          
        }
      });
      return false
    }

    return true

  }

  componentDidMount() {
    this.props.getData("store");
    this.props.getData("item");
    this.props.getData("supplier");
  }
  add2Invoice = async () => {
    console.log(this.state.temp);
    if (this.validation()) {
      
      await this.setState({

        itemsDetail: [...this.state.itemsDetail, this.state.temp]
      })
      this.setState({
        temp: {
          id: "",
          price: 0,
          quantity: 0,
          expiredate: "",
          visible: false,
          errmsg: "select item and complete form to add to invoice "
        }
      })
      this.onDismissItem()
    }
  };
  onDismissItem = () => {
    this.setState({
      temp: {
        ...this.state.temp,
        visible: false
      }
    });
    // this.setState({ visible: false });
  }
  submit = async (e) => {
    let { temp, ...reset } = this.state

    if (reset.itemsDetail.length !== 0
      && this.state.storeid !== "" 
      && this.state.supplierid !== "" 
      ) {
      await this.props.addInvoice(reset);
      this.setState({
        temp: {
          id: "",
          price: 0,
          quantity: 0,
          expiredate: "",
          visible: false,
          errmsg: "select item and complete form to add to invoice "
        },
        transtype: "add",
        storeid: "",
        supplierid: "",
        itemsDetail: [
        ], complete: true
      });
    } else {
      var errmsg = "";
      if (this.state.storeid === "") {
        errmsg += "store undetected ,";

      } if (this.state.supplierid === "") {
        errmsg += "supplier undetected  ,";
      } if (reset.itemsDetail.length === 0) {
        errmsg += "there is no items added to invoice ";
      }
      this.setState({ visible: true, complete: false, errmsg });
    }
    // console.log(reset);

    // this.props.addInvoice(reset);
  };
  onDismiss = () => {
    this.setState({ visible: false });
    // this.setState({ visible: false });
  }
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
        if (e.target.value != -1) {
          let name = this.props.data.items.items.find(o => o.id == e.target.value).generalname;
          console.log(name);
          this.setState({
            ...this.state,
            temp: {
              ...this.state.temp,
              id: e.target.value,
              name: name
            }
          });
        } else {
          this.setState({
            ...this.state,
            temp: {
              ...this.state.temp,
              id: "",
              name: ""
            }
          });
        }
        break;

      case "price":
        this.setState({
          ...this.state,
          temp: { ...this.state.temp, price: e.target.value * this.state.temp.quantity }
        });
        break;

      case "quantity":
        this.setState({
          ...this.state,
          temp: { ...this.state.temp, quantity: e.target.value }
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
    console.log(this.state);
    const temp = this.state.temp;
    const supplier = this.props.data.items.suppliers;
    const store = this.props.data.items.stores;
    const items = this.props.data.items.items;
    const  columns = [{
      dataField: 'name',
      text: 'product'
    }, {
      dataField: 'quantity',
      text: 'quantity'
    }, {
      dataField: 'price',
      text: 'price'
    }, {
      dataField: 'expiredate',
      text: 'expire date'
    } , {
      text: 'Control',
      headerStyle: {
        width: "130px"
      },
      formatter: (cellCnotent, row) => {

        return (
          <div>
            <Button color="danger" onClick={async () => {
             
            }}> <FontAwesome
                name="trash"
                style={{ fontSize: "20px" }}
              /></Button>
          </div>


        );
      }
    }
  ]
    return (
      <div>

        <UncontrolledCollapse toggler="#toggler">
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label>store</Label>
                <Input
                  type="select"
                  value={this.state.storeid}
                  name="storeid"
                  onChange={this.setData.bind()}
                >
                  <option placeholder="select :" value="">select please</option>
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
                  value={this.state.supplierid}

                  onChange={this.setData.bind()}
                ><option placeholder="select :" value="">select please</option>
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
                <Input type="select" name="items" onChange={this.setData.bind()}
                  value={temp.id}
                >
                  <option placeholder="select :" value={-1}>select please</option>
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
                  value={temp.quantity}

                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>price</Label>
                <Input
                  type="number"
                  placeholder="0"
                  name="price"
                  onChange={this.setData.bind()}
                  value={temp.price}

                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Expired date</Label>
                <Input
                  type="date"
                  name="expiredate"
                  value={temp.expiredate}
                  onChange={this.setData.bind()}
                />
              </FormGroup>
            </Col>
          </Row> <Alert
            color="danger"
            isOpen={this.state.temp.visible}
            toggle={this.onDismissItem}
          >
            {this.state.temp.errmsg + "  "}
            <FontAwesome
              name="thumbs-down"
              style={{
                fontSize: "20px"
              }}
            />
          </Alert>
          <Button onClick={this.add2Invoice}>add to invoice</Button>

          <Row>
            {" "}
            <Col sm={12} className="contants">
              <BootstrapTable
                keyField="id"
                data={this.state.itemsDetail}
                columns={columns}
                noDataIndication="Table is Empty"
                striped
                hover
                condensed
                remote
              />
            </Col>

            <Button onClick={this.submit.bind()}>add invoice</Button>

          </Row>
          <br />
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
            {"Add successfully  "}
            <FontAwesome
              name="thumbs-up"
              style={{
                fontSize: "20px"
              }}
            />
          </Alert>
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
    { addInvoice, getData },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
