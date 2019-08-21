import React, { Component } from "react";
import {connect} from 'react-redux'
import {getData} from '../../actions/itemsAction'
import {getItemToSaleAction,saleAction} from '../../actions/salesAction'
import {bindActionCreators} from 'redux' 


import { Col, Row, FormGroup, Input, Label, Button } from "reactstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    //state content addItemform data reqiuerd
    this.state = {
      // "generalname":"drag",
      //   "tradname":"drag 1",
      //   "barcode":"26157890",
      //   "minlevel":10,
      //   "salsunit":1,
      //   "entryunit":1,
      //   "packetsize":1,
      //   "price":2.5
      generalname: "",
      tradname: "",
      barcode: "",
      //number
      minlevel: 1,
      salsunit: 1,
      entryunit:1,
      packetsize:2,
      price:30
    };
  }
componentDidMount(){

  this.props.getData("unit")
  
}
  submit = e => {
    console.log(this.state);
    this.props.add(this.state);
  };
  setData = e => {
    switch (e.target.name) {
      case "generalname":
        this.setState({
          generalname: e.target.value
          
        });
        break;
      case "tradname":
        this.setState({
          tradname: e.target.value
          
        });
        break;
      case "barcode":
        this.setState({
          barcode: e.target.value
          
        });
        break;
      case "minlevel":
        this.setState({
          minlevel: e.target.value
          
        });
        break;
      case "salsunit":
        this.setState({
          salsunit: e.target.value
          
        });
        break;
      
        case "entryunit":
        this.setState({
          entryunit: e.target.value
          
        });
        break;
        case "price":
        this.setState({
          price: e.target.value
          
        });
        break;
        case "packetsize":
        this.setState({
          price: e.target.value
          
        });
        break;
      default:
    }
  };
  render() {
    console.log(this.props.data)
    const unit=this.props.data.units
    return (
      <div>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>scientific name</Label>
              <Input
                type="text"
                placeholder="scientific"
                name="generalname"
                onChange={this.setData.bind()}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>tradtional name</Label>
              <Input type="text" placeholder="traditional name" name="tradname"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>barcode</Label>
              <Input type="text" placeholder="barcode"name="barcode"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>minlevel</Label>
              <Input type="number" placeholder="1" name="minlevel"
                onChange={this.setData.bind()} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>salsunit</Label>
              <Input type="select" placeholder="1" name="salsunit"
                onChange={this.setData.bind()}>
                {unit.map((store,i)=>{
                    return (
                        <option value ={store.id}>{store.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>entryuni</Label>
              <Input type="select" placeholder="1" name="entryuni"
                onChange={this.setData.bind()}>
                {unit.map((store,i)=>{
                    return (
                        <option value ={store.id}>{store.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>packet size</Label>
              <Input type="number" placeholder="1" name="packetsize"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>price</Label>
              <Input type="number" placeholder="0.0" name="price"
                onChange={this.setData.bind()}/>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.submit.bind()}>save</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getItemToSaleAction,saleAction,getData
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (UserForm);
