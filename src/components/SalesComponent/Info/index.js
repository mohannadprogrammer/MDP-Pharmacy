import React, { Component } from "react";
import "../index.css";

import { Col, Row, FormGroup, Input, Label } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";


import {connect} from 'react-redux'
import {getData} from '../../../actions/itemsAction'
import {getItemToSaleAction,saleAction} from '../../../actions/salesAction'
import {bindActionCreators} from 'redux' 

import cellEditFactory from 'react-bootstrap-table2-editor';
class Info extends Component {
    constructor(props){
        super(props)
        this.state={
            storeid:"",
            barcode:""
        }
    }
  getItems = (e) => {
    if (e.key === "Enter") {
      //do something
      this.props.getItemToSaleAction(this.state);
    }
  };
  componentDidMount(){
      this.props.getData("store");
  }
  setData = e => {
    switch (e.target.name) {
      case "store":
        this.setState({
            storeid: e.target.value
          
        });
        break;
      case "barcode":
        this.setState({
            barcode: e.target.value
          
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
        dataField: "quntaty",
        text: "quntaty"
      }
    ];
    const sales={...this.props.data.sales.sales,quntaty:0}
    const products = [sales];
    const stores = this.props.data.items.items
    console.log(this.state,"-----------------")
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log(e)
        }
      };
    return (
      <Col sm={9} className="info">
        <h3>Info</h3>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>store</Label>
              <Input type="select" placeholder="username" name="store" onChange={this.setData.bind()}>
                {stores.map((store,i)=>{
                    return (
                        <option value ={store.id}>{store.name}</option>
                    )
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
        </Row>
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          rowEvents={rowEvents}
          noDataIndication="Table is Empty"
          cellEdit={ cellEditFactory({ mode: 'click' }) }
          
        />
      </Col>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getItemToSaleAction,saleAction,getData
    },dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(Info);
