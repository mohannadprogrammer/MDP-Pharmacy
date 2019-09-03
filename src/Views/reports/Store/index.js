import React, { Component } from "react";
import Pdf from "react-to-pdf";

//import
import BootstrapTable from "react-bootstrap-table-next";
import Dashboard from '../../../hoc/Dashboard'
import PHeader from "../../../components/PHeader";

import {
  Row,
  Col,
  Button
} from "reactstrap";

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};
class index extends Component {
  render() {
    
    return (
      <Dashboard>
        <Pdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => <Button onClick={toPdf} color="success">Generate pdf</Button>}
        </Pdf>
        <br/>
        <br/>
        <div
          ref={ref}
          style={{background:"gray",margin:"10px"}}
        >
        <PHeader PageName="Invioce Details" toggle={this.toggle} >
        <hr/>
        <Row>
        <Col sm={6}>
        <h5>invoice id :{""}</h5>
        </Col> 
        <Col sm={6}>
        <h5>Supplier Name : </h5>{"res.Supplier"}
        </Col> 
        <Col sm={6}>
        <h5>Store : {""}</h5>
        </Col>
        <Col sm={6}>
        <h5>date : {"res.date.toString()"}</h5>
        </Col>
          
        </Row>
        </PHeader>

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={[]}
              columns={[{
                dataField: 'name',
                text: 'name'
              }, {
                dataField: 'location',
                text: 'location'
              }
            ]}
              noDataIndication="Table is Empty"
            />
          </Col>
        </Row>

        <PHeader PageName="Invioce Details" toggle={this.toggle} >
        <hr/>
        <Row>
        <Col sm={6}>
        <h5>invoice id :{""}</h5>
        </Col> 
        <Col sm={6}>
        <h5>Supplier Name : </h5>{"res.Supplier"}
        </Col> 
        <Col sm={6}>
        <h5>Store : {""}</h5>
        </Col>
        <Col sm={6}>
        <h5>date : {"res.date.toString()"}</h5>
        </Col>
          
        </Row>
        </PHeader>

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={[]}
              columns={[{
                dataField: 'name',
                text: 'name'
              }, {
                dataField: 'location',
                text: 'location'
              }
            ]}
              noDataIndication="Table is Empty"
            />
          </Col>
        </Row>
        <PHeader PageName="Invioce Details" toggle={this.toggle} >
        <hr/>
        <Row>
        <Col sm={6}>
        <h5>invoice id :{""}</h5>
        </Col> 
        <Col sm={6}>
        <h5>Supplier Name : </h5>{"res.Supplier"}
        </Col> 
        <Col sm={6}>
        <h5>Store : {""}</h5>
        </Col>
        <Col sm={6}>
        <h5>date : {"res.date.toString()"}</h5>
        </Col>
          
        </Row>
        </PHeader>

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={[]}
              columns={[{
                dataField: 'name',
                text: 'name'
              }, {
                dataField: 'location',
                text: 'location'
              }
            ]}
              noDataIndication="Table is Empty"
            />
          </Col>
        </Row>
        </div>
      </Dashboard>
    );
  }
}

export default index;
