import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button,FormFeedback,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        result:false,
      validationModals:false,
      validMsg:""
  };
  this.toggle = this.toggle.bind(this);
}
// componentDidMount(){
//   console.log("did");
//   // this.props.getData();
// }
// componentWillUpdate(){
//   console.log("will update");
//   this.props.getData();
// }
reset=()=>{
  this.setState({
    name: "",
  })
}
toggle() {
  this.setState(prevState => ({
    validationModals: !prevState.validationModals
  }));
}
validation(){
  var {name   }=this.state
  if (name==="" 
        ){
          this.setState({
            result:false,
            validMsg:"make sure that you are enter name "
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
 submit = async (e) => {
  if (this.validation()){
    console.log(e.target);
    
    await this.props.add(this.state);
    // this.props.getData();
    this.reset();
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
                placeholder="Store name"
                name="name"
                onChange={this.setData.bind()}
                value={this.state.name}
              invalid ={this.state.invalid}/>
              
              <FormFeedback invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback>
            </FormGroup>
          </Col>
          
          
        </Row>
        <Row>
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

export default Form;
