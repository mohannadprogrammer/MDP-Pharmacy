import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../../actions/itemsAction";
import { stockStatusAction ,stockStatustDownloadAction } from "../../../actions/reportAction";
import { bindActionCreators } from "redux";

import { Col, Row, FormGroup, Input, Label, Button ,Alert} from "reactstrap";
import FontAwesome from "react-fontawesome"

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
	    "storeid":"",
      visible: false,
      errmsg: ""
    };
  }
  componentDidMount() {
    this.props.getData("store");
  }
  validation(){
    var {storeid  }=this.state
    if (storeid===""
          ){
            this.setState({
              visible:true,
              errmsg:"select store "
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
  submit = e => {
    if(this.validation())
     {this.props.stockStatusAction(this.state)}
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
          this.props.stockStatustDownloadAction(this.state);
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
    { stockStatusAction, getData ,stockStatustDownloadAction},
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
