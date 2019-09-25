import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/UserForm";
import PHeader from "../../components/PHeader";

import FontAwesome from "react-fontawesome"
import {
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, FormGroup, Input, Label, FormFeedback, Badge
} from "reactstrap";


import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { connect } from "react-redux";
import { getData, add, update, deleteUserAction } from "../../actions/userAction";
import { bindActionCreators } from "redux";
import { async } from "q";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      row: {}

    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.getData("users");
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addfun = async user => {
    console.log("collaback");
    console.log(user);
    await this.props.add(user);
    this.props.getData("users");
  };

  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          row: {
            ...this.state.row,
            username: e.target.value
          }

        });
        break;
      case "password":
        this.setState({
          row: {
            ...this.state.row,
            password: e.target.value
          }

        });
        break;
      case "email":
        this.setState({
          row: {
            ...this.state.row,
            email: e.target.value
          }

        });
        break;
      case "jobtitle":
        this.setState({
          row: {
            ...this.state.row,
            jobtitle: e.target.value
          }

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
          row: {
            ...this.state.row,
            phone: e.target.value
          }

        });
        break;
      default:
    }
  };
  async update(row) {
    await this.setState({
      row
    })
    this.toggle();
  }
  render() {
    const columns = [{
      dataField: 'username',
      text: 'Username',
      formatter: (cellCnotent, row) => {
        return (
          <per style={{
            fontSize: "20px", maxWidth: "10px",
            wordWrap: "break-word"
          }}>{row.username}</per>
        )
      }
    },
    {
      dataField: 'email',
      text: 'Email',
      formatter: (cellCnotent, row) => {
        return (
          <per style={{
            fontSize: "20px", maxWidth: "10px",
            wordWrap: "break-word"
          }}>{row.email}</per>
        )
      }
    }, {
      dataField: 'jobtitle',
      text: 'Job',
      formatter: (cellCnotent, row) => {
        return (
          <per style={{
            fontSize: "20px", maxWidth: "10px",
            wordWrap: "break-word"
          }}>{row.jobtitle}</per>
        )
      }
    }, {
      dataField: 'phone',
      text: 'Phone',
      formatter: (cellCnotent, row) => {
        return (
          <per style={{
            fontSize: "20px", maxWidth: "10px",
            wordWrap: "break-word"
          }}>{row.phone}</per>
        )
      }
    }, {
      text: 'permission',
      formatter: (cellCnotent, row) => {
        return (
          <per style={{
            fontSize: "20px", maxWidth: "10px",
            wordWrap: "break-word"
          }}>{row.name}</per>
        )
      }
    }, {
      dataField: 'active',
      text: 'active',
      formatter: (cellCnotent, row) => {
        if (row.active === 1) {
          return (
            <Badge color="success">active</Badge>

          )
        } else {
          return (
            <Badge color="danger">inactive</Badge>
          )
        }

        // <per style={{fontSize:"20px", maxWidth:"10px",
        // wordWrap:"break-word"}}>{row.active}</per>

      }
    }
      , {
      text: 'Control',
      headerStyle: {
        width: "130px"
      },
      formatter: (cellCnotent, row) => {

        return (
          <div>
            <Button color="primary" onClick={() => { this.update(row) }}> <FontAwesome
              name="edit"
              style={{ fontSize: "20px" }}
            /></Button> <Button color="danger" onClick={async () => {
              if (row.active===1)
              {await this.props.deleteUserAction({ name: row.username, value: 0 });
            }else{
              await this.props.deleteUserAction({ name: row.username, value: 1 });

            }
              this.props.getData('users')
            }}> <FontAwesome
                name="trash"
                style={{ fontSize: "20px" }}
              /></Button>
          </div>


        );
      }
    }
    ];
    let products = this.props.data.items;

    return (
      <Dashoard>
        <PHeader PageName="User info" toggle={this.toggle}>
          <Form add={this.addfun} />
        </PHeader>

        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              noDataIndication="Table is Empty"
              striped
              hover
              condensed
              pagination={paginationFactory()}
            />
          </Col>
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Update user</ModalHeader>
          <ModalBody>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    name="name"
                    onChange={this.setData.bind()}
                    value={this.state.row.username}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="Password" placeholder="password" name="password"
                    onChange={this.setData.bind()}
                    value={this.state.row.password}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Example@mail.com" name="email"
                    onChange={this.setData.bind()}
                    value={this.state.row.email}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Job title</Label>
                  <Input type="text" placeholder="Job title" name="jobtitle"
                    onChange={this.setData.bind()}
                    value={this.state.row.jobtitle}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>phone</Label>
                  <Input type="text" placeholder="09xxxxxxxx" name="phone"
                    onChange={this.setData.bind()}
                    value={this.state.row.phone}
                    invalid={this.state.invalid}
                  />
                  <FormFeedback invalid>should include 10 number and have no chares</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={async () => {
              this.toggle();
              await this.props.update(this.state.row);
              this.props.getData("users");
            }}>
              update
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Dashoard>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getData, add, update, deleteUserAction }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
