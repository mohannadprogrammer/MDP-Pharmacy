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
      salsunit: "",
      entryunit:"",
      packetsize:1,
      price:0,
      result:false,
      validationModals:false,
      validMsg:""
  };
  this.toggle = this.toggle.bind(this);
}
reset=()=>{
  this.setState({
    generalname: "",
      tradname: "",
      barcode: "",
      //number
      minlevel: 1,
      salsunit: "",
      entryunit:"",
      packetsize:1,
      price:0,
  })
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
        || entryunit===""){
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
    this.props.getData("item");
    this.reset();
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
      
        case "entryuni":
        this.setState({
          entryunit: e.target.value
          
        });
        break;
        case "price":
          console.log("price")
        this.setState({
          price: e.target.value
          
        });
        break;
        case "packetsize":
        this.setState({
          packetsize: e.target.value
          
        });
        break;
      default:
    }
  };
  render() {
    console.log(this.state)
    const unit=this.props.data.units
    return (
      <div>
        <UncontrolledCollapse toggler="#toggler">
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Scientific name</Label>
              <Input
                type="text"
                placeholder="scientific"
                name="tradname"
                onChange={this.setData.bind()}
                value={this.state.tradname}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>General name</Label>
              <Input type="text" placeholder="General name" name="generalname"
                onChange={this.setData.bind()} value={this.state.generalname}></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Barcode</Label>
              <Input type="text" placeholder="barcode"name="barcode"
                onChange={this.setData.bind()} 
                value={this.state.barcode}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Min.Level</Label>
              <Input type="number" placeholder="1" name="minlevel"
                onChange={this.setData.bind()} 
                value={this.state.minlevel}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Sale unit</Label>
              <Input type="select" placeholder="1" name="salsunit"
                onChange={this.setData.bind()}
                value={this.state.salsunit}
                >
                <option value="">select unit </option>
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
              <Label>Entry unit</Label>
              <Input type="select" placeholder="1" name="entryuni"
                 onChange={this.setData.bind()}
                 value={this.state.entryunit}>
                <option value={null}>select unit </option>
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
                onChange={this.setData.bind()}
                value={this.state.packetsize}/>
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
                onChange={this.setData.bind()}
                value={this.state.price}/>
            </FormGroup>
          </Col>
          <Col md={1} ><Button color="success" onClick={this.submit.bind()}>save</Button></Col>
        <Col md={1}><Button onClick={this.reset.bind()}>reset</Button></Col>
        </Row>
       

        </UncontrolledCollapse>
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
