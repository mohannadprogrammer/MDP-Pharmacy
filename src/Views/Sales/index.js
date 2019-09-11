import React from "react";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";
import Dashboard from "../../hoc/Dashboard";
import PHeader from "../../components/PHeader";
//sales component
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
//it a moduals contant all routes in the app
import "./index.css";
import { connect } from "react-redux";
import { getData } from "../../actions/itemsAction";
import { getItemToSaleAction, saleAction } from "../../actions/salesAction";
import { bindActionCreators } from "redux";
class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transtype: "sale",
      itemsDetail: [],
      storeid: 0,
      discount: 0
    };
  }
  getItems = e => {
     this.props.getItemToSaleAction(this.state);
    e.target.value = null;
  };
  componentDidMount() {
    this.props.getData("store");
  }
  pay = () => {

    this.props.saleAction(this.props.data.sales.requist,this.state.storeid);
    
  };
  setData = async (e) => {
    switch (e.target.name) {
      case "store":
        this.setState({
          storeid: e.target.value
        });
        break;
      case "barcode":
        await this.setState({
          barcode: e.target.value
        });
        // this.getItems.bind(this);
        // let temp = { ...this.props.data.sales.sales, quantity: 1 }
        // this.addTobill(temp);
        // // this.setState({
        // //   ...this.state,
        // //   itemsDetail: [...this.state.itemsDetail, temp]
        // // });
        break;
      default:
    }
  };
  
  addTobill(temp){
    if (temp.id) {
      if(this.isAddIt(temp)){
      this.setState({
        ...this.state,
        itemsDetail: [...this.state.itemsDetail, temp]
      });
    }
      
    }
  }
  render() { 
    
    const columns = [
      {
        dataField: "generalname",
        text: "sceintN",
        editable: (content, row, rowIndex, columnIndex) => columnIndex < 0
      },
      {
        dataField: "tradname",
        text: "generalN",
        editable: (content, row, rowIndex, columnIndex) => columnIndex < 0
      },
      {
        dataField: "available",
        text: "available",
        editable: (content, row, rowIndex, columnIndex) => columnIndex < 0
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

    
    console.log("salse :",this.props.data.sales.sales);
    let products = this.props.data.sales.requist.itemsDetail;
    let stores = this.props.data.items.stores;
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
           alert("asldkfkl")
      }
    };
    return (
      <Dashboard>
        <PHeader PageName="Sales" toggle={this.toggle} button />
        <Row>
          {/* <Info passToBill={this.passToBill.bind()}/> */}
          <Col className="info">
            <h3>Info</h3>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label>store</Label>
                  <Input
                    type="select"
                    placeholder="username"
                    name="store"
                    onChange={this.setData.bind(this)}
                  >
                    {stores.map((store, i) => {
                      return <option value={store.id}>{store.name}</option>;
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>barcode</Label>
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
                <Button onClick={this.pay.bind(this)} style={{float:"right"}}>payed</Button>
                
              </Col>
            </Row>
           <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              noDataIndication="Table is Empty"
              rowEvents={rowEvents}
              cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
            />
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
    { getItemToSaleAction, saleAction, getData },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sales);
