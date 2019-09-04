import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button,FormFeedback,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        location: "",
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
  var {name , location  }=this.state
  if (name==="" 
        || location===""
        ){
          this.setState({
            result:false,
            validMsg:"make sure that you are enter (location , name ) at least ."
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
submit = e => {
  if (this.validation()){
    console.log(e.target);
    
    this.props.add(this.state);
  }
  this.toggle();
  
};
  setData = e => {
    this.setState({
      invalid:false,  
    })
    switch (e.target.name) {
      case "name":
        this.setState({
            name: e.target.value
          
        });
        break;
      case "location":
        this.setState({
            location: e.target.value
          
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
              invalid ={this.state.invalid}/>
              
              <FormFeedback invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>location</Label>
              <Input type="text" placeholder="Enter Location" name="location"
                onChange={this.setData.bind()} 
                invalid ={this.state.invalid}
                />
                
              <FormFeedback  invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback>

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

export default Form;
