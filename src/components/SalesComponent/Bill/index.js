import React,{Component} from 'react'

import {Col,Table} from 'reactstrap'

import BootstrapTable from "react-bootstrap-table-next";
import '../index.css'
class Bill extends Component {
    render(){
      const columns = [
        {
          dataField: "generalname",
          text: "sceintN"
        },
        {
          dataField: "tradname",
          text: "generalN"
        },
        {
          dataField: "available",
          text: "Catagory"
        }
      ];
      const products = [];
        return (
            <Col sm ={3} className="f" style={{paddingRight:"0"}}>
                <div className ="bill">
                    <h3>Bill</h3>
                    <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          noDataIndication="Table is Empty"
        />
                    {/* <Table>
        <thead>
          <tr>
            <th>medicin</th>
            <th>Quntity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>2</td>
            <td>2$</td>
          </tr>
          <tr><td>Mark</td>
            <td>2</td>
            <td>2$</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td></td>
            <td>4$</td>
          </tr>
        </tbody>
      </Table> */}
                </div>
            </Col>
        )
    }
}
export default Bill;