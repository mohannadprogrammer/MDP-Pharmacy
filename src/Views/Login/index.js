import React, { Component } from "react";
import {Redirect } from "react-router-dom";
//
import "./index.css";
//
import { Col, Button, Input, FormGroup , Label } from "reactstrap";
import {login} from '../../api'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:false,
      username:"",
      password:""
    };
  }
   submit= async ()=>{
    //  this.props.history.push("/dashboard");

    
    let res =await login(this.state.username ,this.state.password)
         .then(res=>{
            // console.log(res.data.user.token);

            localStorage.setItem("token",res.data.user.token)
            return res.data
         }).catch(err=>{
            console.log(err)
            return err
         })

         console.log(res)
         if (res.done){
        this.setState({
          login:true
        })
        }else{

          alert(res.msg);
        }
        // handlle validation 
         

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
