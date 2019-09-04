import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../../actions/itemsAction";
import { getItemToSaleAction, saleAction } from "../../../actions/salesAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button ,UncontrolledCollapse} from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  componentDidMount() {
    this.props.getData("store");

    this.props.getData("item");
    this.props.getData("supplier");
  }
  
  submit = e => {
     
  };
  setData = e => {
    switch (e.target.name) {
      
    //   case "expiredate":
    //     this.setState({
    //       ...this.state,
    //       temp: { ...this.state.temp, expiredate: e.target.value }
    //     });
    //     break;
      default:
    }
  };
  render() {
    console.log(this.props.data);
    const store = this.props.data.items.stores;
    const items = this.props.data.items.items;
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
              <Label>store</Label>
              <Input
                type="select"
                placeholder="username"
                name="storeid"
                onChange={this.setData.bind()}
              >
                <option placeholder="select :">select please</option>
                <hr />
                {items.map((store, i) => {
                  return (
                    <option key={i} value={store.id}>
                      {store.generalname}
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
                name="expiredate"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label> End date</Label>
              <Input
                type="date"
                name="expiredate"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.add2Invoice}>filter</Button>

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
    { getItemToSaleAction, saleAction, getData },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
