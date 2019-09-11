import React, { Component } from "react";
//import
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import PHeader from "../../components/PHeader";
import { Redirect } from "react-router-dom";
import {
  Row,
  Col,
} from "reactstrap";


//import redux states and actions 
import { connect } from 'react-redux'
import { getAllInvoice ,getData} from '../../actions/itemsAction'
import { bindActionCreators } from 'redux'

//immport configration json .
import config from "./config";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id:"",
      row:{}
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.getAllInvoice();
    console.log(this.props)
    console.log("*($*$($($($($$")
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    if (this.state.id) {
      return (
        <Redirect to={"/invoice/invoiceDetail/" + this.state.id} />
      )
    }
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(row)
        this.setState({
          id: row.id,
          row:row
        })
      }
    };
    const columns = config.columns;
    let products = this.props.data.items.invoice;
    
    return (
      <Dashoard>
        <PHeader PageName="Inovice" toggle={this.toggle} />

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              rowEvents={rowEvents}
              noDataIndication="Table is Empty"
              pagination={ paginationFactory() }
            />
          </Col>
        </Row>
      </Dashoard>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllInvoice,getData
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
