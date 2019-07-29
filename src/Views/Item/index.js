import React ,{Component} from "react"

//import 
import BootstrapTable from 'react-bootstrap-table-next';

import Dashoard from "../../hoc/Dashboard"
import "./indexx.css";
import Form from "../../components/Forms"
import PHeader from "../../components/PHeader"

import {Row,Button,Col, Modal, ModalHeader, ModalBody, ModalFooter } from"reactstrap"
class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render(){
        const  columns = [{
            dataField: 'TradeN',
            text: 'Trade name'
          }, {
            dataField: 'Generic',
            text: 'Generic Name'
          }, {
            dataField: 'catagory',
            text: 'Catagory'
          }, {
            dataField: 'supplier',
            text: 'supplier'
          }, {
            dataField: 'sellingprice',
            text: 'Catagory'
          }, {
            dataField: 'MiniL',
            text: 'Minimum Level'
          }, {
            dataField: 'unit',
            text: 'unit'
          }, {
            dataField: 'pack size',
            text: 'Catagory'
          }, {
            dataField: 'edit',
            text: 'Edit'
          }
        ];
        const products=[
        ]
        const data=[
            {
                //input props   
                id :"Trande",
                name:"Trande",
                type:"text",
                //label
                label:"Trande name",
               
                
            },
            {
                id :"exampleCheck",
                name:"number",
                type:"Generic number",
                //label
                label:"text",
                
                
            },
            {
                id :"exampleCheck",
                name:"email",
                type:"",
                //label
                label:"Gerneric number",
                
                
            },{
                id :"exampleCheck",
                name:"email",
                type:"select",
                select:[
                    "",
                    "",
                    ""
                ],
                //label
                label:"text",
                
                
            },
        ]
        const buttons=[
            {
                text:"save"
            },{
                text:"reset"

            }

        ]    
        return (
            <Dashoard >
                <PHeader PageName="Item" toggle={this.toggle}>
                    
                </PHeader>
                
                <Row> <Col sm={12} className="contants">
                <BootstrapTable
                     keyField="id"
                     data={ products }
                     columns={ columns }
                     noDataIndication="Table is Empty"
                />

                </Col></Row>

                
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              <Form data buttons>

              </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
                
                {/* <Form data={[
            {
                //input props   
                id :"Trande",
                name:"Trande",
                type:"text",
                //label
                label:"Trande name",
               
                
            },
            {
                id :"exampleCheck",
                name:"number",
                type:"Generic number",
                //label
                label:"text",
                
                
            },
            {
                id :"exampleCheck",
                name:"email",
                type:"",
                //label
                label:"Gerneric number",
                
                
            },{
                id :"exampleCheck",
                name:"email",
                type:"select",
                select:[
                    "",
                    "",
                    ""
                ],
                //label
                label:"text",
                
                
            },
        ]}
        buttons={[
            {
                text:"save"
            },{
                text:"reset"

            }

        ]
    
    }
     >
     </Form> */}
           

            </Dashoard>
        )
    }
}


export default Item;