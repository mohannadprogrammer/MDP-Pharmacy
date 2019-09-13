import React from"react";
import {Button} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
const config={
  
    columns : [{
      dataField: 'barcode',
      text: 'Barcode'
    },{
        dataField: 'tradname',
        text: 'Scientific name',
        headerFormatter:()=>{
          return(
            <div>Scientific name</div>
          )
        }
      }, {
        dataField: 'generalname',
        text: 'General Name'
      }, {
        dataField: 'minlevel',
        text: 'Min.Level'
      }, {
        dataField: 'salsunit',
        text: 'Sale Unit'
      }, {
        dataField: 'entryunit',
        text: 'Entry Unit'
      }, {
        dataField: 'packetsize',
        text: 'Packet Size'
      }, {
        dataField: 'price',
        text: 'Price'
      } , {
        text: 'Control',
         headerStyle: {
            width:"130px"
          },
        formatter: (cellCnotent, row) => {
            return (
                <div>
                    <Button color="primary"> <FontAwesome
                name="edit"
                style={{  fontSize: "20px"  }}
              /></Button> <Button color="danger"> <FontAwesome
                    name="trash"
                    style={{  fontSize: "20px" }}
                  /></Button>
                </div>
                
              
            );
          }
      }
    ]}

export default config;
