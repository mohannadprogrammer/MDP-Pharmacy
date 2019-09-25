import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button ,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter,FormFeedback} from "reactstrap";
import {getData} from '../../actions/itemsAction'
import {bindActionCreators} from 'redux' 
import {connect} from 'react-redux'


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newusername: "",
        password: "",
        email: "",
        jobtitle: "",
        phone: "",
        permission:"",
        invalid: false,
        validationModals:false,
        result:false,
        validMsg:""
    };
    this.toggle = this.toggle.bind(this);
  }
  componentWillMount(){
    this.props.getData("permission")
  }
  reset=()=>{
    this.setState({
      newusername: "",
      password: "",
      email: "",
      jobtitle: "",
      phone: "",
      invalid: true
    })
  }
  toggle() {
    this.setState(prevState => ({
      validationModals: !prevState.validationModals
    }));
  }
  validation(){
    var {username , password , email , phone ,permission,invalid }=this.state
    if (username==="" 
          || password===""
          || email===""
          || phone==="" 
            || permission==="" ){
            
            this.setState({
              result:false,
              validMsg:"make sure that you are enter (username , password , email ,permission or phone) at least ."
            });
            return false
          }else{
            this.setState({
              result:true,
              validMsg:"successfull"
            });
          }
      if(invalid){
        this.setState({
          result:false,
          validMsg:"can not register , there is invalid phone number"
        });
        return false
      }

          return true
    
  }
  submit = e => {
    if (this.validation()){
      console.log(e.target);
      
      this.props.add(this.state);
      this.reset();
    }
    this.toggle();
    
  };
  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
            newusername: e.target.value
          
        });
        break;
      case "password":
        this.setState({
            password: e.target.value
          
        });
        break;
      case "email":
        this.setState({
            email: e.target.value
          
        });
        break;
      case "jobtitle":
        this.setState({
            jobtitle: e.target.value
          
        });
        break;
      case "permission":
          this.setState({
            permission: e.target.value
            
          });
          break;
      case "phone":
        if(e.target.value.length===10 && !isNaN( Number(e.target.value))){
          this.setState({
            invalid: false
          
        });
        }else{
          
            this.setState({
              invalid: true
            
          });
          
        }
        this.setState({
            phone: e.target.value
          
        });
        break;
      default:
    }
  };
  render() {
    console.log(this.state)
    const permission = this.props.data.items.permission;
    return (
      <div>
      <UncontrolledCollapse toggler="#toggler">
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Username"
                name="name"
                onChange={this.setData.bind()}
                value={this.state.newusername}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Password</Label>
              <Input type="Password" placeholder="password" name="password"
                onChange={this.setData.bind()} 
                value={this.state.password}
                />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Example@mail.com"name="email"
                onChange={this.setData.bind()} 
                value={this.state.email}
                />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Job title</Label>
              <Input type="text" placeholder="Job title" name="jobtitle"
                onChange={this.setData.bind()} 
                value={this.state.jobtitle}
                />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>phone</Label>
              <Input type="text" placeholder="09xxxxxxxx" name="phone"
                onChange={this.setData.bind()}
                value={this.state.phone}
                invalid={this.state.invalid}
                />
                <FormFeedback invalid>should include 10 number and have no chares</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>permissions</Label>
              <Input type="select" placeholder="1" name="permission"
                 onChange={this.setData.bind()}
                 value={this.state.permission}>
                <option value="">select permissions </option>
                {permission.map((permission,i)=>{
                    return (
                        <option value ={permission.id}>{permission.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={1} ><Button color="success" onClick={this.submit.bind()}>save</Button></Col>
        <Col md={1}><Button onClick={this.reset.bind()}>reset</Button></Col>
        </Row></UncontrolledCollapse>
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
      data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getData
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (UserForm);
