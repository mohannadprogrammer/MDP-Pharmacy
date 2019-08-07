import React, { Component } from "react";
import "../index.css";

import { Col, Row, FormGroup, Input, Label } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
class Info extends Component {
  getItems = (e) => {
    if (e.key === "Enter") {
      //do something
      console.log(e.target.value)
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
        text: "Catagory"
      }
    ];
    const products = [];

    return (
      <Col sm={9} className="info">
        <h3>Info</h3>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>stock</Label>
              <Input type="select" placeholder="username" name="name">
                <option>stoke1</option>
                <option>stoke1</option>
                <option>stoke1</option>
                <option>stoke1</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>barecode</Label>
              <Input
                type="text"
                placeholder="barecode"
                name="barecode"
                onKeyUp={this.getItems.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          noDataIndication="Table is Empty"
        />
      </Col>
    );
  }
}
export default Info;
