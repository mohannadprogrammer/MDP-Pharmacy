import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./index.css";
import FontAwesome from "react-fontawesome";

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
              {data.PageName === "Inovice" ||
              data.PageName === "Sales" ||
              data.PageName === "Stock" ||
              data.PageName === "Invioce Details" ? (
                data.PageName === "Invioce Details" || this.props.isReturn ? (
                  <Button
                    color="primary"
                    onClick={this.props.toggle}
                    style={{ marginBottom: "1rem", width: "100%" }}
                  >
                    return invoice
                  </Button>
                ) : null
              ) : (
                <Button
                  color="primary"
                  id="toggler"
                  style={{ margin: "0", width: "100%" }}
                >
                  <FontAwesome
                    name="plus"
                    style={{  fontSize: "30px" ,float:"right" }}
                  />
                 <h4 style={{   margin: "0"}}>add</h4> 
                </Button>
              )}
            </Col>
          </Row>
          <Col>{this.props.children}</Col>
        </Col>
      </Row>
    );
  }
}

export default PHeader;
