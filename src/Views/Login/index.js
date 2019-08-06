import React, { Component } from "react";
import {Redirect } from "react-router-dom";
//
import "./index.css";
//
import { Col, Button, Input, FormGroup , Label } from "reactstrap";
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:false,
      username:"",
      password:""
    };
  }
  submit=()=>{
    //  this.props.history.push("/dashboard");

    const instance = axios.create();
    instance.defaults.timeout = 100000;
    
    instance.defaults.headers = {
      ContentType: "application/json",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const res = instance.post("http://localhost:3000/user/login",{ username :this.state.username ,password:this.state.password})
         .then(res=>{
            console.log(res.data);
            localStorage.setItem("isAuth",true)
            localStorage.setItem("token",res.data.token)
         }).catch(err=>{
            console.log(err)
         })
    console.log (( res.data )) 
        // this.setState({
        //   login:true
        // })


  }
  setUsername=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  setPassword=(event)=>{
    this.setState({
      password:event.target.value
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
              <Input type="text" name="usename" placeholder="username" onChange={this.setUsername.bind(this)}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Input type="password" name="password" placeholder="password" onChange={this.setPassword.bind(this)} />
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
