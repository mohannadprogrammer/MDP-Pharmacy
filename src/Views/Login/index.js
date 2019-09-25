import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//
import "./index.css";
//
import log from '../../img/icon.png'
import { Col, Button, Input, FormGroup } from "reactstrap";
import { login } from "../../api";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      username: "",
      password: ""
    };
  }
  submit = async () => {
    //  this.props.history.push("/dashboard");

    let res = await login(this.state.username, this.state.password)
      .then(res => {
        // console.log(res.data.user.token);
        let {dashboard ,sales,purchase,manageinvoice,reports,setting }=res.data.user;
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("permission", JSON.stringify({
          dashboard,
          sales,
          purchase,
          manageinvoice,
          reports,
          setting
        }));
        return res.data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });

    console.log(res);
    if (res.done) {
      this.setState({
        login: true
      });
    } else {
      alert(res.msg);
    }
    // handlle validation
  };
  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  render() {
    if (this.state.login) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <section className="contan">
        <div className="img-holder" />
        <div className="login_holder">
          <div className="logo-div">
          <img src={log} alt="Logo" className="logo" />
            {/* <div className="logo"></div> */}
          </div>
          <FormGroup>
            <Col>
              <Input
                type="text"
                name="usename"
                placeholder="username"
                onChange={this.setUsername.bind(this)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.setPassword.bind(this)}
                onKeyPress={(e)=>{
                  console.log(e.key==="Enter")
                  if(e.key==="Enter"){
                    this.submit();
                  }
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup check></FormGroup>

          <FormGroup>
            <Col>
              <Button className="button" color="dark" onClick={this.submit}>
                LOG IN
              </Button>
            </Col>
          </FormGroup>
        </div>
      </section>
    );
  }
}
export default Login;
