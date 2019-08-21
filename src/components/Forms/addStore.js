import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        location: "",
        
    };
  }

  submit = e => {
    console.log(this.state);
    this.props.add(this.state);
  };
  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
            name: e.target.value
          
        });
        break;
      case "location":
        this.setState({
            location: e.target.value
          
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
              <Label>location</Label>
              <Input type="text" placeholder="password" name="location"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.submit.bind()}>save</Button>
      </div>
    );
  }
}

export default Form;
