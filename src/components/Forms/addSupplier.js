import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        "accnum":"715267351",
        address: "",
        email: "",
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
          name: e.target.value
          
        });
        break;
      case "address":
        this.setState({
          address: e.target.value
          
        });
        break;
      case "email":
        this.setState({
            email: e.target.value
          
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
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="name"
                name="name"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>address</Label>
              <Input type="text" placeholder="address" name="address"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="password placeholder"name="email"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>phone</Label>
              <Input type="text" placeholder="phone" name="phone"
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
