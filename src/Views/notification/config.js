import React from"react";
import {Button} from 'reactstrap'
import FontAwesome from "react-fontawesome";


const config={
    
    columns : [
        {
        dataField: 'username',
        text: 'Username'
        },
        {
            dataField: 'email',
        text: 'Email'
      }, {
        dataField: 'jobtitle',
        text: 'Job'
      },{
      dataField: 'phone',
        text: 'phone'
      }, {
        text: 'Control',
        headerStyle: {
            width:"130px"
          }
      }
      
    ]}
export default config;
