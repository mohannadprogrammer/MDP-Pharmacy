import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../../actions/itemsAction";
import { stockStatusAction } from "../../../actions/reportAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
	    "storeid":0
     
    };
  }
  componentDidMount() {
    this.props.getData("store");
  }
  
  submit = e => {
     this.props.stockStatusAction(this.state)
  };
  setData = e => {
    switch (e.target.name) {
      
      case "storeid":
        this.setState({
            storeid :e.target.value
               });
        break;
      default:
    }
  };
  render() {
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
    { stockStatusAction, getData },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
