import React, { Component } from "react";

//import
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/addUnit";
import PHeader from "../../components/PHeader";

// import {  FormGroup, Input, Label, Button,FormFeedback,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";

import FontAwesome from "react-fontawesome"
import {
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,FormGroup, Input, Label,FormFeedback
} from "reactstrap";


import { connect } from 'react-redux'
import { getData } from '../../actions/itemsAction'
import {add , update , deleteUnitAction } from '../../actions/unitsAction'
import { bindActionCreators } from 'redux'

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

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
    this.props.getData("unit");
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  addfun = async (unit) => {
    await this.props.add(unit)
    this.props.getData("unit");
  }
  setData = e => {
    this.setState({
      invalid:false,  
    })
    switch (e.target.name) {
      case "name":
        this.setState({
            ...this.state,
            row:{
              ...this.state.row,
              name: e.target.value
              }
          
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
    
    const columns =[{
      dataField: 'id',
      text: '#',
      sort: true
    },{
        dataField: 'name',
        text: 'Name',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.name}</per>
          )
        }
      }
      ,{
        text: 'Control',
        headerStyle: {
            width:"130px"
          },
        formatter: (cellCnotent, row) => {
            
            return (
                <div>
                    <Button color="primary" onClick={()=>{this.update(row)}}> <FontAwesome
                name="edit"
                style={{  fontSize: "20px"  }}
              /></Button> <Button color="danger" onClick={()=>{
                confirmAlert({
                  title: "delete store ?",
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: async () => {
                        console.log("delete")
                        await this.props.deleteStoreAction(row.id);
                        this.props.getData("store");
                      }
                    },
                    {
                      label: "No"
                    }
                  ]
                });
               
               
              }}> <FontAwesome
                    name="trash"
                    style={{  fontSize: "20px" }}
                  /></Button>
                </div>
                
              
            );
          }
      }
    ];
    let products =this.props.data.items.units;

    return (
      <Dashoard>
        <PHeader PageName="units info" toggle={this.toggle} >
            <Form  add={this.addfun} getData={()=>this.props.getData("store")}/>
        </PHeader>


        <Row>
          {" "}
          <Col sm={12} className="contants">
            <BootstrapTable
              keyField="id"
              data={products}
              columns={columns}
              //rowEvents={rowEvents}
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
          <ModalHeader toggle={this.toggle}>Add STORE</ModalHeader>
          <ModalBody>
            <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Store name"
                name="name"
                value={this.state.row.name}
                onChange={this.setData.bind()}/>
              
              {/* <FormFeedback invalid ={this.state.invalid}>{this.state.vmsg}</FormFeedback> */}
            </FormGroup>
          </Col>
          
          
        </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={async ()=>{
              this.toggle();
              await this.props.update(this.state.row);
              this.props.getData("unit");
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
    data: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getData,add ,update,deleteUnitAction
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
