import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../../actions/itemsAction";
import {
  stockMovementAction,
  stockMovementDownloadAction
} from "../../../actions/reportAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button,Alert} from "reactstrap";
import FontAwesome from "react-fontawesome"

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoicetype:this.props.type,
      startDate: "",
      endDate: "",
      storeid: "", 
      visible: false,
      errmsg: ""
    };
  }
  validation(){
    var {storeid ,startDate ,endDate }=this.state
    if (storeid===""
    ||startDate===""
    || endDate===""
          ){
            this.setState({
              visible:true,
              errmsg:"complite information "
            });
            return false
          }else{
            this.setState({
              visible:false
            });
          }
  
          return true
    
  }
  onDismiss = () => {
    this.setState({ visible: false });
  }
  componentDidMount() {
    this.props.getData("store");

    this.props.getData("item");
    this.props.getData("supplier");
  }

  submit = e => {
    if(this.validation()){
    this.props.stockMovementAction(this.state);

    }
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
                <option placeholder="select :" value="">select please</option>
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
        <Alert
            color="danger"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            {this.state.errmsg + "  "}
            <FontAwesome
              name="thumbs-down"
              style={{
                fontSize: "20px"
              }}
            />
          </Alert>
        <Button onClick={this.submit.bind()}>filter</Button>
        <Button  style ={{
          float:"right"
        }}onClick={()=>
        {
          if(this.validation()){
          this.props.stockMovementDownloadAction(this.state);
        }
        }} color="primary">print</Button>

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
