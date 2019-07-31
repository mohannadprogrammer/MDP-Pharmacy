import React,{Component} from 'react'

import {Col,Table} from 'reactstrap'

import '../index.css'
class Bill extends Component {
    render(){
        return (
            <Col sm ={3} className="f" style={{paddingRight:"0"}}>
                <div className ="bill">
                    <h3>Bill</h3>
                    <Table>
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
      </Table>
                </div>
            </Col>
        )
    }
}
export default Bill;