import React, { Component } from "react";
import {connect} from 'react-redux'
import {getData} from '../../actions/itemsAction'
import {getItemToSaleAction,saleAction} from '../../actions/salesAction'
import {bindActionCreators} from 'redux' 
import Validation from '../Validation'

import { Col, Row, FormGroup, Input, Label, Button ,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    //state content addItemform data reqiuerd
    this.state = {
      // "generalname":"drag",
      //   "tradname":"drag 1",
      //   "barcode":"26157890",
      //   "minlevel":10,
      //   "salsunit":1,
      //   "entryunit":1,
      //   "packetsize":1,
      //   "price":2.5
      generalname: "",
      tradname: "",
      barcode: "",
      //number
      minlevel: 1,
      salsunit: null,
      entryunit:null,
      packetsize:null,
      price:0,
      result:false,
      validationModals:false,
      validMsg:""
  };
  this.toggle = this.toggle.bind(this);
}
toggle() {
  this.setState(prevState => ({
    validationModals: !prevState.validationModals
  }));
}
validation(){
  var {barcode , tradname , generalname , price,salsunit,entryunit }=this.state
  if (barcode==="" 
        || tradname===""
        || generalname===""
        || price===""
        || salsunit ===""
        || entryunit==="" ){
          this.setState({
            result:false,
            validMsg:"make sure that you are enter (barcode , tradname , generalname ,price,salsunit or entryunit) at least ."
          });
          return false
        }else{
          this.setState({
            result:true,
            validMsg:"added successfull "
          });
        }

        return true
  
}
componentDidMount(){

  this.props.getData("unit")
  
}

submit = e => {
  if (this.validation()){
    console.log(e.target);
    
    this.props.add(this.state);
  }
  this.toggle();
  
};
  setData = e => {
    switch (e.target.name) {
      case "generalname":
        this.setState({
          generalname: e.target.value
          
        });
        break;
      case "tradname":
        this.setState({
          tradname: e.target.value
          
        });
        break;
      case "barcode":
        this.setState({
          barcode: e.target.value
          
        });
        break;
      case "minlevel":
        this.setState({
          minlevel: e.target.value
          
        });
        break;
      case "salsunit":
        this.setState({
          salsunit: e.target.value
          
        });
        break;
      
        case "entryunit":
        this.setState({
          entryunit: e.target.value
          
        });
        break;
        case "price":
        this.setState({
          price: e.target.value
          
        });
        break;
        case "packetsize":
        this.setState({
          price: e.target.value
          
        });
        break;
      default:
    }
  };
  render() {
    console.log(this.props.data)
    const unit=this.props.data.units
    return (
      <div>
        <UncontrolledCollapse toggler="#toggler">
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>scientific name</Label>
              <Input
                type="text"
                placeholder="scientific"
                name="generalname"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>tradtional name</Label>
              <Input type="text" placeholder="traditional name" name="tradname"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>barcode</Label>
              <Input type="text" placeholder="barcode"name="barcode"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>minlevel</Label>
              <Input type="number" placeholder="1" name="minlevel"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>salsunit</Label>
              <Input type="select" placeholder="1" name="salsunit"
                onChange={this.setData.bind()}>
                <option>select unit </option>
                {unit.map((store,i)=>{
                    return (
                        <option key={i} value ={store.id}>{store.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>entryuni</Label>
              <Input type="select" placeholder="1" name="entryuni"
                onChange={this.setData.bind()}>
                <option>select unit </option>
                {unit.map((store,i)=>{
                    return (
                        <option value ={store.id}>{store.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>packet size</Label>
              <Input type="number" placeholder="1" name="packetsize"
                onChange={this.setData.bind()}/>
                <Validation info={[
                  {
                    condition :true,
                    msg:"kasdlf"
                  }
                ]}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>price</Label>
              <Input type="number" placeholder="0.0" name="price"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.submit.bind()}>save</Button></UncontrolledCollapse>
        <Modal isOpen={this.state.validationModals} toggle={this.toggle} style={this.state.result ?{"color":"green"}:{"color":"red"}} >
          <ModalHeader toggle={this.toggle}>add result</ModalHeader>
          <ModalBody>
           {this.state.validMsg}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getItemToSaleAction,saleAction,getData
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (UserForm);
