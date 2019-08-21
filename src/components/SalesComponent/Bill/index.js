import React, { Component } from "react";

import { Col, Button } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import "../index.css";


import {connect} from 'react-redux'
import {saleAction} from '../../../actions/salesAction'
import {bindActionCreators} from 'redux' 

class Bill extends Component {
  constructor(props) {
    super(props);
    this.state={
      "transtype":"sale",
      "itemsDetail":[],
      "storeid":1,
      "discount":0
    }
  }
  componentWillMount(){
    
  }
  pay=()=>{
    this.setState({
      ...this.state,
      itemsDetail:[this.props.row],
    })
    console.log("pay")
    this.props.saleAction(this.state)
    // product.pop()

  }
  render() {
    console.log("-------***************",this.props.row)
    const columns = [
      {
        dataField: "tradname",
        text: "medicin"
      },
      {
        dataField: "quantity",
        text: "quantity"
      },
      {
        dataField: "price",
        text: "total price"
      }
    ];
    
    const products = [this.props.row];
    return (
      <Col sm={3} className="f" style={{ paddingRight: "0" }}>
        <div className="bill">
          <h3>Bill</h3>
          <BootstrapTable
            keyField="id"
            data={products}
            columns={columns}
            noDataIndication="Table is Empty"
          />
          <Button onClick={this.pay.bind(this)}>payed</Button>
          {/* <Table>
        <thead>
          <tr>
            <th>medicin</th>
            <th>Quntity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>2</td>
            <td>2$</td>
          </tr>
          <tr><td>Mark</td>
            <td>2</td>
            <td>2$</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td></td>
            <td>4$</td>
          </tr>
        </tbody>
      </Table> */}
        </div>
      </Col>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saleAction
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Bill);
