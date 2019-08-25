import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./index.css";
class PHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        newusername: "",
        password: "",
        email: "",
        jobtitle: "",
        phone: ""
      }
    };
  }
  
  render() {
    const data = this.props;
    return (
      <Row>
        <Col sm={12} className="title">
          <Row>
            <Col sm={10}>
              <h3>{data.PageName}</h3>
            </Col>
            <Col sm={2}>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' ,width:"100%"}}>
      add
    </Button></Col>
          </Row>
          <Col>
          {this.props.children}
              </Col>
        </Col>
      </Row>
    );
  }
}

export default PHeader;
