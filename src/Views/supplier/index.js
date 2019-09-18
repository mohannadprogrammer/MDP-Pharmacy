import React, { Component } from "react";

//import
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/addSupplier";
import PHeader from "../../components/PHeader";
import FontAwesome from "react-fontawesome"
import {
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,FormGroup, Input, Label
} from "reactstrap";

import config from "./config";


import {connect} from 'react-redux'
import {getData} from '../../actions/itemsAction'
import {add ,update,deleteSupplierAction} from '../../actions/supplierAction'
import {bindActionCreators} from 'redux'

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { async } from "q";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      row:{}
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount(){
    this.props.getData("supplier");
  }
  addfun = async (supplier) => {
    console.log('collaback')
    console.log(supplier)
    await this.props.add(supplier)
    this.props.getData("supplier");
  }
  
  setData = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          row:{

          
            ...this.state.row,
            name: e.target.value}
          
        });
        break;
      case "address":
        this.setState({
          row:{
            ...this.state.row,
            address: e.target.value}
          
        });
        break;
      case "email":
        this.setState({
          row:{
            ...this.state.row,
            email: e.target.value}
          
        });
        break;
        case "accnum":
        this.setState({
          row:{
            ...this.state.row,
            accnum: e.target.value}
          
        });
        break;
      case "phone":
        this.setState({
          row:{
            ...this.state.row,
            phone: e.target.value}
          
        });
        break;
      default:
    }
  };
  async update (row){
    console.log("asd")
    await this.setState({
      row
    })
    this.toggle();
  }
  render() {
    console.log("alskdflkasdf",this.state.row);
    const columns = [
      {
        dataField: "name",
        text: "Name"
      },
      {
        dataField: "email",
        text: "Email"
      },
      {
        dataField: "address",
        text: "Address"
      },
      {
        dataField: "phone",
        text: "Phone"
      },
      {
        dataField: "updateduser",
        text: "updateduser"
      },
      {
        dataField: "edit",
        text: "Edit"
      },
      {
        text: "Control",
        headerStyle: {
          width: "130px"
        },
        formatter: (cellCnotent, row) => {
          return (
            <div>
              <Button color="primary" >
                {" "}
                <FontAwesome name="edit"  style={{ fontSize: "20px" }}  onClick={()=>{this.update(row)}}/>
              </Button>{" "}
              <Button color="danger" onClick={()=>{
                confirmAlert({
                  title: "delete supplier ?",
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: async () => {
                        console.log("delete")
                        await this.props.deleteSupplierAction(row.id);
                        this.props.getData("supplier");
                      }
                    },
                    {
                      label: "No"
                    }
                  ]
                });
               
               
              }}>
                {" "}
                <FontAwesome name="trash" style={{ fontSize: "20px" }} />
              </Button>
            </div>
          );
        }
      }
    ];
    let products =this.props.data.suppliers;
    const form = config.form;
    const buttons = config.buttons;
    
    return (
      <Dashoard>
        <PHeader PageName="Supplier info" toggle={this.toggle}  >
            <Form data={form} buttons={buttons} add={this.addfun} />
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
          <ModalHeader toggle={this.toggle}>Add supplier</ModalHeader>
          <ModalBody>
          <Row form>
          <Col md={12}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="name"
                name="name"
                onChange={this.setData.bind()}
                value={this.state.row.name}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Address</Label>
              <Input type="text" placeholder="address" name="address"
                onChange={this.setData.bind()} 
                value={this.state.row.address}
                />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Example@mail.com"name="email"
                value={this.state.row.email}
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Account number</Label>
              <Input type="text" placeholder="Acounnt number"name="accnum"
                value={this.state.row.accnum}
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Phone</Label>
              <Input type="text" placeholder="09xxxxxxxx" name="phone"
                onChange={this.setData.bind()}
                value={this.state.row.phone}
                />
            </FormGroup>
          </Col>
        </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"  onClick={async ()=>{
              this.toggle();
              await this.props.update(this.state.row);
              this.props.getData("supplier");
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

const mapStateToProps = (state) => {
  return {
    data: state.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getData,add,update,deleteSupplierAction
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);

