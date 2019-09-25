import React, { Component } from "react";

import { Col, Row, FormGroup, Input, Label, Button, UncontrolledCollapse, Modal, ModalHeader, ModalBody, ModalFooter ,FormFeedback} from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      accnum: "",
      address: "",
      email: "",
      phone: "",
      invalid:true
    };

    this.toggle = this.toggle.bind(this);
  }
  reset = () => {
    this.setState({
      name: "",
      accnum: "",
      address: "",
      email: "",
      phone: ""
    })
  }
  toggle() {
    this.setState(prevState => ({
      validationModals: !prevState.validationModals
    }));
  }
  validation() {
    var { name, address, email, phone ,invalid } = this.state
    if (name === ""
      || address === ""
      || email === ""
      || phone === "") {
      this.setState({

        validMsg: "make sure that you are enter (username , password , email or phone) at least ."
      });
      return false
    } else {
      this.setState({

        validMsg: "successfull"
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
    if (this.validation()) {
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
      case "accnum":
        this.setState({
          accnum: e.target.value

        });
        break;
      case "phone":
        if (e.target.value.length === 10 && !isNaN(Number(e.target.value))) {
          this.setState({
            invalid: false

          });
        } else {

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
                  value={this.state.name}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Address</Label>
                <Input type="text" placeholder="address" name="address"
                  onChange={this.setData.bind()}
                  value={this.state.address}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Example@mail.com" name="email"
                  value={this.state.email}
                  onChange={this.setData.bind()} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Account number</Label>
                <Input type="text" placeholder="Acounnt number" name="accnum"
                  value={this.state.accnum}
                  onChange={this.setData.bind()} />
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
          </Row>
          <Row>
            <Col md={1} ><Button color="success" onClick={this.submit.bind()}>save</Button></Col>
            <Col md={1}><Button onClick={this.reset.bind()}>reset</Button></Col>
          </Row></UncontrolledCollapse>
        <Modal isOpen={this.state.validationModals} toggle={this.toggle} style={{ "color": "red" }} >
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
