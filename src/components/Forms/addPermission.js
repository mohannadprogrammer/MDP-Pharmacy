import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button,FormFeedback,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "dashboard": false,
      "sales": false,
      "purchase": false,
      "manageinvoice": false,
      "reports": false,
      "setting": false,
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
 submit = async (e) => {
  if (this.validation()){
    
    await this.props.add(this.state);
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
      case "dashboard":
        this.setState({
          dashboard: !this.state.dashboard
          
        });
        break;
        case "sales":
          this.setState({
            sales: !this.state.sales
            
          });
          break;
          case "purchase":
            this.setState({
              purchase: !this.state.purchase
              
            });
            break;
            case "manageinvoice":
              this.setState({
                manageinvoice:!this.state.manageinvoice
                
              });
              break;
              case "reports":
                this.setState({
                  reports: !this.state.reports
                  
                });
                break;
                case "setting":
                  this.setState({
                    setting: !this.state.setting
                    
                  });
                  break;
      default:
    }
  };
  render() {
    console.log(this.state)
    return (
      <div>
        
    <UncontrolledCollapse toggler="#toggler">
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="permission name"
                name="name"
                onChange={this.setData.bind()}
                value={this.state.name}
              invalid ={this.state.invalid}/>
              
              <FormFeedback invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback>
            </FormGroup>
          </Col>
          
        </Row> 
        <Row>
        <Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  
              name="dashboard"
              onChange={this.setData.bind()} 
              checked={this.state.dashboard}
              />Dashboard</Label>
              
                
              <FormFeedback  invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback>

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  
              name="sales"
              onChange={this.setData.bind()}  
              checked={this.state.sales}

              />Sales</Label>
              
                
              <FormFeedback  invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback>

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  name="purchase"
              onChange={this.setData.bind()} 
              checked={this.state.purchase}

              />
              Buy</Label>
              
                

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox" placeholder="Enter Location" name="manageinvoice"
              onChange={this.setData.bind()} 
              checked={this.state.manageinvoice}

              />Manage Invoice</Label>
              
                

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox" placeholder="Enter Location" name="reports"
              onChange={this.setData.bind()} 
              checked={this.state.reports}

              />Reports</Label>
              
                

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  name="setting"
              onChange={this.setData.bind()} 
              checked={this.state.setting}

              />Setting</Label>
              

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
