import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button,FormFeedback,UncontrolledCollapse  } from "reactstrap";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        location: "",
        invalid:false,
        vmsg:"error",
        toggle:false
    };
    
  }
  validation=()=>{
    if(this.state.name==="" || this.state.location===""){
      this.setState({
        ... this.state,
        invalid:true,
        vmsg:"insert data "
      })
    }
  }
  submit = e => {
    console.log(this.state);
    
    this.validation();
    if(this.state.invalid)
      this.props.add(this.state);
    
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
      </div>
    );
  }
}

export default Form;
