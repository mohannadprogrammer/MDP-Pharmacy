import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../../actions/itemsAction";
import {
  stockMovementAction,
  stockMovementDownloadAction
} from "../../../actions/reportAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoicetype:this.props.type,
      startDate: "",
      endDate: "",
      storeid: ""
    };
  }
  componentDidMount() {
    this.props.getData("store");

    this.props.getData("item");
    this.props.getData("supplier");
  }

  submit = e => {
    this.props.stockMovementAction(this.state);
    console.log(this.props.data);
  };
  setData = e => {
    switch (e.target.name) {
      case "storeid":
        this.setState({
          storeid: e.target.value
        });
        break;
      case "item":
        this.setState({
          item: e.target.value
        });
        break;
      case "startDate":
        this.setState({
          startDate: e.target.value+" 00:00:01"
        });
        break;
      case "endDate":
        this.setState({
          endDate: e.target.value+" 23:59:59"
        });
        break;
      default:
    }
  };
  render() {
    console.log(this.state);
    const store = this.props.data.items.stores;
    return (
      <div>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>store</Label>
              <Input
                type="select"
                placeholder="username"
                name="storeid"
                onChange={this.setData.bind()}
              >
                <option placeholder="select :">select please</option>
                <hr />
                {store.map((store, i) => {
                  return (
                    <option key={i} value={store.id}>
                      {store.name}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
         

          <Col md={3}>
            <FormGroup>
              <Label>Start date</Label>
              <Input
                type="date"
                name="startDate"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label> End date</Label>
              <Input
                type="date"
                name="endDate"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.submit.bind()}>filter</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { stockMovementAction, stockMovementDownloadAction, getData },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
