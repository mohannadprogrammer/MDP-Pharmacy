import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../../hoc/Dashboard";
import "./index.css";
import Form from "../../../components/Forms/Fliters/stockFilter";
import PHeader from "../../../components/PHeader";

import {
  Row,
  Button,
  Col
} from "reactstrap";

import config from "./config";


import { connect } from 'react-redux'
import { stockMovementDownloadAction } from '../../../actions/reportAction'
import { bindActionCreators } from 'redux'
import { stockMovementDownload} from "../../../api"

import Pdf from "react-to-pdf";
const ref = React.createRef();

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "startDate":"2019-01-01",
	    "endDate":"2019-12-30",
      "storeid":"36",
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    // this.props.getStockData(this.props.match.params.id);
  }
  render() {
   
    const columns = config.columns;
    const itemsColumns = config.itemsColumns;
    let products = this.props.data.report.stockmovement.invoices;
    const expandRow = {
      renderer: row => (
        <div>
           <BootstrapTable
              keyField="tradname"
              data={row.items}
              columns={itemsColumns}
              expandRow={expandRow}
              noDataIndication="this invoice have no items in it ."
            />
        </div>
      )
    };
    return (
      <Dashoard>
        <div targetRef={ref} filename="div-blue.pdf">
         
            <Button onClick={()=>stockMovementDownload(this.state)} color="success">
              print pdf
            </Button>
         
        </div>
        
        <div
          ref={ref}
          style={{ height: "100%", width: "100%" }}
          className="container"
        >
        <br/>
        <PHeader PageName={config.home} toggle={this.toggle} >
            <Form type="" ></Form>
        </PHeader>
            
        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="invoiceid"
              data={products}
              columns={columns}
              expandRow={expandRow}
              noDataIndication="Table is Empty"
            />
          </Col>
        </Row></div>

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
    stockMovementDownloadAction,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);

