import React, { Component } from "react";
import {Row,Col,Button} from "reactstrap"
import "./index.css"
class PHeader extends Component {
  render() {
    const data = this.props;
    return (
      <Row>
        <Col sm={12} className="title">
          <Row>
            <Col sm={11}>
              <h3>{data.PageName}</h3>
            </Col>
            <Col sm={1}>
              <Button className="addB" color="success" onClick={data.toggle}>
                add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PHeader;
