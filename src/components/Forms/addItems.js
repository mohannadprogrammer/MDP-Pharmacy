import React, { Component } from "react";
import { connect } from "react-redux";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newusername: "",
        password: "",
        email: "",
        jobtitle: "",
        phone: ""
    };
  }

  submit = e => {
    console.log(e.target);
    this.props.add(this.state);
  };
  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
            newusername: e.target.value
          
        });
        break;
      case "password":
        this.setState({
            password: e.target.value
          
        });
        break;
      case "email":
        this.setState({
            email: e.target.value
          
        });
        break;
      case "jobtitle":
        this.setState({
            jobtitle: e.target.value
          
        });
        break;
      case "phone":
        this.setState({
            phone: e.target.value
          
        });
        break;
      default:
    }
  };
  render() {
    return (
      <div>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>scientific name</Label>
              <Input
                type="text"
                placeholder="scientific"
                name="generalname"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>tradtional name</Label>
              <Input type="text" placeholder="traditional name" name="tradname"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>barcode</Label>
              <Input type="text" placeholder="barcode"name="barcode"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>minlevel</Label>
              <Input type="number" placeholder="1" name="minlevel"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>salsunit</Label>
              <Input type="text" placeholder="1" name="salsunit"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>entryuni</Label>
              <Input type="text" placeholder="1" name="entryuni"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>packet size</Label>
              <Input type="number" placeholder="1" name="packetsize"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>price</Label>
              <Input type="number" placeholder="0.0" name="price"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.submit.bind()}>save</Button>
      </div>
    );
  }
}

export default UserForm;
