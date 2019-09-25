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
  Button
} from "reactstrap";

import FontAwesome from 'react-fontawesome'

//import redux states and actions 
import { connect } from 'react-redux'
import { getAllInvoice, getData } from '../../actions/itemsAction'
import { bindActionCreators } from 'redux'

//immport configration json .
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: "",
      row: {}
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.getAllInvoice();
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

    const columns = [
      {
        dataField: 'id',
        text: 'ID'
      },
      {
        dataField: 'transtype',
        text: 'transaction type'
      }, {
        dataField: 'creater',
        text: 'Creater'
      },
      {
        dataField: "trandate",
        text: "Date"
      },
      {

        text: "Control",
        formatter: (cellCnotent, row) => {
          return (
            <Button color="primary" onClick={() => {
              this.setState({
                id: row.id,
                row: row
              })
            }}> <FontAwesome
                name="edit"
                style={{ fontSize: "20px" }}
              /></Button>

          );
        }
      }
    ];
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
              noDataIndication="Table is Empty"
              striped
              hover
              condensed
              pagination={paginationFactory()}
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
    getAllInvoice, getData
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
