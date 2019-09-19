import React, { Component } from "react";

//import
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import Dashoard from "../../hoc/Dashboard";
import "./index.css";
import Form from "../../components/Forms/addItems";
import PHeader from "../../components/PHeader";


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
import config from "./config";

import { connect } from "react-redux";
import { getData, add ,update,deleteItemAction } from "../../actions/itemsAction";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { bindActionCreators } from "redux";
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
  componentDidMount() {
    this.props.getData("item");
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
    this.props.getData("item");

  };
  
  setData = e => {
      switch (e.target.name) {
        case "generalname":
          this.setState({
            row:{
              ...this.state.row,
            generalname: e.target.value}
            
          });
          break;
        case "tradname":
          this.setState({
            row:{
              ...this.state.row,
            tradname: e.target.value}
            
          });
          break;
        case "barcode":
          this.setState({
            row:{
              ...this.state.row,
            barcode: e.target.value}
            
          });
          break;
        case "minlevel":
          this.setState({
            row:{
              ...this.state.row,
            minlevel: e.target.value}
            
          });
          break;
        case "salsunit":
          this.setState({
            row:{
              ...this.state.row,
            salsunit: e.target.value}

            
          });
          break;
        
          case "entryuni":
          this.setState({row:{
            ...this.state.row,
            entryunit: e.target.value}
            
          });
          break;
          case "price":
          this.setState({
            row:{
              ...this.state.row,
            price: e.target.value}
            
          });
          break;
          case "packetsize":
          this.setState({
            row:{
              ...this.state.row,
            packetsize: e.target.value}
            
          });
          break;
        default:
      }
  };
  async update (row){
    await this.setState({
      row
    })
    this.toggle();
  }
  render() {
    
    let products = this.props.data.items;
    const unit=this.props.data.units;
    const columns = [{
      dataField: 'barcode',
      text: 'Barcode',
      formatter:(cellCnotent,row)=>{
        return(
          <per style={{fontSize:"20px", maxWidth:"10px",
          wordWrap:"break-word"}}>{row.barcode}</per>
        )
      }
    },{
        dataField: 'tradname',
        text: 'Scientific name',
        headerFormatter:()=>{
          return(
            <div>Scientific name</div>
          )
        },
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.tradname}</per>
          )
        }
      }, {
        dataField: 'generalname',
        text: 'General Name',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.gerneralname}</per>
          )
        }
      }, {
        dataField: 'minlevel',
        text: 'Min.Level',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.minlevel}</per>
          )
        }
      }, {
        dataField: 'salsunit',
        text: 'Sale Unit',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{unit.find(o=>o.id===row.salsunit).name}</per>
          )
        }
      }, {
        dataField: 'entryunit',
        text: 'Entry Unit',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{unit.find(o=>o.id===row.entryunit).name}</per>
          )
        }
      }, {
        dataField: 'packetsize',
        text: 'Packet Size',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.packetsize}</per>
          )
        }
      }, {
        dataField: 'price',
        text: 'Price',
        formatter:(cellCnotent,row)=>{
          return(
            <per style={{fontSize:"20px", maxWidth:"10px",
            wordWrap:"break-word"}}>{row.price}</per>
          )
        }
      } , {
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
                  title: "delete item ?",
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: async() => {
                        console.log("delete")
                        await this.props.deleteItemAction(row.id);
                        this.props.getData("item");
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


    return (
      <Dashoard>
        <PHeader PageName="Item info" toggle={this.toggle}>
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
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
          <Row form>
          <Col md={12}>
            <FormGroup>
              <Label>Scientific name</Label>
              <Input
                type="text"
                placeholder="scientific"
                name="tradname"
                onChange={this.setData.bind()}
                value={this.state.row.tradname}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>General name</Label>
              <Input type="text" placeholder="General name" name="generalname"
                onChange={this.setData.bind()} value={this.state.row.generalname}></Input>
            </FormGroup>
          </Col>
          {/* <Col md={12}>
            <FormGroup>
              <Label>Barcode</Label>
              <Input type="text" placeholder="barcode"name="barcode"
                onChange={this.setData.bind()} 
                value={this.state.row.barcode}/>
            </FormGroup>
          </Col> */}
          <Col md={12}>
            <FormGroup>
              <Label>Min.Level</Label>
              <Input type="number" placeholder="1" name="minlevel"
                onChange={this.setData.bind()} 
                value={this.state.row.minlevel}/>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Sale unit</Label>
              <Input type="select" placeholder="1" name="salsunit"
                onChange={this.setData.bind()}
                value={this.state.row.salsunit}
                >
                <option value="">select unit </option>
                {unit.map((store,i)=>{
                    return (
                        <option key={i} value ={store.id}>{store.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Entry unit</Label>
              <Input type="select" placeholder="1" name="entryuni"
                 onChange={this.setData.bind()}
                 value={this.state.row.entryunit}>
                <option value={null}>select unit </option>
                {unit.map((store,i)=>{
                    return (
                        <option value ={store.id}>{store.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>packet size</Label>
              <Input type="number" placeholder="1" name="packetsize"
                onChange={this.setData.bind()}
                value={this.state.row.packetsize}/>
                
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>price</Label>
              <Input type="number" placeholder="0.0" name="price"
                onChange={this.setData.bind()}
                value={this.state.row.price}/>
            </FormGroup>
          </Col>
        </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={async ()=>{
              this.toggle();
              await this.props.update(this.state.row);
              this.props.getData("item");
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
  return bindActionCreators({ getData, add ,update,deleteItemAction}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
