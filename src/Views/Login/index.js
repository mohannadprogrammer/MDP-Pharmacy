import React, { Component } from "react";
import {Redirect } from "react-router-dom";
//
import "./index.css";
//
import { Col, Button, Input, FormGroup , Label } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:false
    };
  }
  submit=()=>{
    //  this.props.history.push("/dashboard");

    this.setState({
      login:true
    })

  }
  render() {
    if (this.state.login){
      return(
        <Redirect  to ="/dashboard"/>
      )

    }
    return (
      <section className="contan">
        <div className="img-holder" />
        <div className="login_holder">
          
          <div className="logo-div">
          <div className="logo">
      
      </div>
      
          </div>
          <FormGroup>
            <Col>
              <Input type="text" name="usename" placeholder="username" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Input type="password" name="password" placeholder="password" />
            </Col>
          </FormGroup>
          <FormGroup check>
          <Col>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Remember me </Label>
          </Col>
          
        </FormGroup>
          
          <FormGroup>
            <Col>
            <Button className="button" onClick={this.submit}>LOG IN</Button>
            </Col>
          </FormGroup>

          
        </div>
      </section>
    );
  }
}
export default Login;
