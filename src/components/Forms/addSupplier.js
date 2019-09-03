import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button ,UncontrolledCollapse,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        address: "",
        email: "",
        phone: ""
    };
    
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      validationModals: !prevState.validationModals
    }));
  }
  validation(){
    var {name , address , email , phone }=this.state
    if (name==="" 
          || address===""
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
      this.props.add(this.state);
    }
    this.toggle();
  };
  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          name: e.target.value
          
        });
        break;
      case "address":
        this.setState({
          address: e.target.value
          
        });
        break;
      case "email":
        this.setState({
            email: e.target.value
          
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
                placeholder="name"
                name="name"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>address</Label>
              <Input type="text" placeholder="address" name="address"
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
