import React, { Component } from "react";
import { connect } from "react-redux";

import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transtype: "add",
            storeid: "",
            supplierid: "",
            itemsDetail: []
        };
    }

    submit = e => {
        console.log(e.target);
        this.props.add(this.state);
    };
    setData = e => {
        switch (e.target.name) {
            case "name":
                this.setState({
                    newusername: e.target.value

                });
                break;
            case "password":
                this.setState({
                    password: e.target.value

                });
                break;
            case "email":
                this.setState({
                    email: e.target.value

                });
                break;
            case "jobtitle":
                this.setState({
                    jobtitle: e.target.value

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
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label>store</Label>
                            <Input type="select" placeholder="username" name="name">
                                <option>stoke1</option>
                                <option>stoke1</option>
                                <option>stoke1</option>
                                <option>stoke1</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label>supplier</Label>
                            <Input type="text" placeholder="traditional name" name="tradname"
                                onChange={this.setData.bind()} />
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.submit.bind()}>save</Button>
            </div>
        );
    }
}

export default UserForm;
