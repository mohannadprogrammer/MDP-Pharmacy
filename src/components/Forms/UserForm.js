import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button ,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newusername: "",
        password: "",
        email: "",
        jobtitle: "",
        phone: "",
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
    var {username , password , email , phone }=this.state
    if (username==="" 
          || password===""
          || email===""
          || phone==="" ){
            this.setState({

              validMsg:"make sure that you are enter (username , password , email or phone) at least ."
            });
            return false
          }else{
            this.setState({

              validMsg:"successfull"
            });
          }

          return true
    
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
      case "phone":
        this.setState({
            phone: e.target.value
          
        });
        break;
      default:
    }
  };
  render() {
    return (
      <div>
      <UncontrolledCollapse toggler="#toggler">
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="username"
                name="name"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="password" name="password"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="password placeholder"name="email"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>JobTitle</Label>
              <Input type="text" placeholder="job Title" name="jobtitle"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>phone</Label>
              <Input type="text" placeholder="phone" name="phone"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.submit.bind()}>save</Button></UncontrolledCollapse>
        <Modal isOpen={this.state.validationModals} toggle={this.toggle} style={{"color":"red"}} >
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

export default UserForm;
