import React, { Component } from "react";

//import
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from "react-bootstrap-table-next";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/addPermission";
import PHeader from "../../components/PHeader";

import { Redirect } from "react-router-dom";
// import {  FormGroup, Input, Label, Button,FormFeedback,UncontrolledCollapse ,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";

import FontAwesome from "react-fontawesome"
import {
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,Badge,
  ModalFooter,FormGroup, Input, Label,FormFeedback
} from "reactstrap";


import { connect } from 'react-redux'
import { getData } from '../../actions/itemsAction'
import {add , update , deletePermissionAction} from '../../actions/permissionAction'
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
    this.props.getData("permission");
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  addfun = async (permission) => {
    await this.props.add(permission)
    this.props.getData("permission");
  }
  setData = e => {
    this.setState({
      invalid:false,  
    })
    switch (e.target.name) {
      case "name":
        this.setState({
            row:{
              ...this.state.row,
              name: e.target.value}
          
        });
        break;
      case "dashboard":
        this.setState({
          row:{
            ...this.state.row,
          dashboard: !this.state.row.dashboard}
          
        });
        break;
        case "sales":
          this.setState({
            row:{
              ...this.state.row,
            sales: !this.state.row.sales}
            
          });
          break;
          case "purchase":
            this.setState({
              row:{
                ...this.state.row,
              purchase: !this.state.row.purchase}
              
            });
            break;
            case "manageinvoice":
              this.setState({
                row:{
                  ...this.state.row,
                manageinvoice:!this.state.row.manageinvoice}
                
              });
              break;
              case "reports":
                this.setState({
                  row:{
                    ...this.state.row,
                  reports: !this.state.row.reports}
                  
                });
                break;
                case "setting":
                  this.setState({
                    row:{
                      ...this.state.row,
                    setting: !this.state.row.setting}
                    
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
    if (this.state.id) {
      return (
        <Redirect to={"/stores/storeDetail/" + this.state.id} />
      )
    }
    console.log(this.state.row)
    // const rowEvents = {
    //   onClick: (e, row, rowIndex) => {
    //     console.log(row)
    //     this.setState({
    //       id: row.id
    //     })
    //   }
    // };
    const columns =[{
        dataField: 'name',
        text: 'Name',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.name}</per>
          )
        }
      },{
        text: 'Dashbord',
        formatter:(cellCnotent,row)=>{
          if (row.dashboard) {
            return (
              <Badge color="success">authrized</Badge>
  
            )
          } else {
            return (
              <Badge color="danger">unautrized</Badge>
            )
          }
        }
      },{
        dataField: 'sales',
        text: 'Sales',
        formatter:(cellCnotent,row)=>{
          if (row.sales) {
            return (
              <Badge color="success">authrized</Badge>
  
            )
          } else {
            return (
              <Badge color="danger">unautrized</Badge>
            )
          }
        }
      },{
        text: 'buy',
        formatter:(cellCnotent,row)=>{
          if (row.purchase) {
            return (
              <Badge color="success">authrized</Badge>
  
            )
          } else {
            return (
              <Badge color="danger">unautrized</Badge>
            )
          }
        }
      },{
        text: 'Manage invoice',
        formatter:(cellCnotent,row)=>{
          if (row.manageinvoice) {
            return (
              <Badge color="success">authrized</Badge>
  
            )
          } else {
            return (
              <Badge color="danger">unautrized</Badge>
            )
          }
        }
      },{
        text: 'Report',
        formatter:(cellCnotent,row)=>{
          if (row.reports) {
            return (
              <Badge color="success">authrized</Badge>
  
            )
          } else {
            return (
              <Badge color="danger">unautrized</Badge>
            )
          }
        }
      },{
        text: 'Setting',
        formatter:(cellCnotent,row)=>{
          if (row.setting) {
            return (
              <Badge color="success">authrized</Badge>
  
            )
          } else {
            return (
              <Badge color="danger">unautrized</Badge>
            )
          }
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
                  title: "delete permission ?",
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: async () => {
                        console.log("delete")
                        await this.props.deletePermissionAction(row.id);
                        this.props.getData("permission");
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
    let products =this.props.data.items.permission;

    return (
      <Dashoard>
        <PHeader PageName="Permission info" toggle={this.toggle} >
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
          <Col md={3}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="permission name"
                name="name"
                onChange={this.setData.bind()}
                value={this.state.row.name}
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
              checked={this.state.row.dashboard}
              />Dashboard</Label>

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  
              name="sales"
              onChange={this.setData.bind()}  
              checked={this.state.row.sales}

              />Sales</Label>
              

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  name="purchase"
              onChange={this.setData.bind()} 
              checked={this.state.row.purchase}

              />
              Buy</Label>
              
                

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox" placeholder="Enter Location" 
              name="manageinvoice"
              onChange={this.setData.bind()} 
              checked={this.state.row.manageinvoice}

              />Manage Invoice</Label>
              
                

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox" placeholder="Enter Location"
              name="reports"
              onChange={this.setData.bind()} 
              checked={this.state.row.reports}

              />Reports</Label>
              
                

            </FormGroup>
            
          </Col><Col md={2}>
            <FormGroup check inline>
              <Label>
              <Input type="checkbox"  name="setting"
              onChange={this.setData.bind()} 
              checked={this.state.row.setting}

              />Setting</Label>
              

            </FormGroup>
            
          </Col>
        </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={async ()=>{
              this.toggle();
              await this.props.update(this.state.row);
              this.props.getData("permission");
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
    getData,add ,update,deletePermissionAction
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
