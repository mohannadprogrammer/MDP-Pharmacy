import React,{Component} from 'react'

import {Col} from 'reactstrap'

import '../index.css'
class Info extends Component {
    render(){
        return (
                <Col sm ={9} className ="info">
                    <h3>Info</h3>
            </Col>
        )
    }
}
export default Info;