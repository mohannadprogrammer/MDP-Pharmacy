import React from 'react'
import {Button} from "reactstrap"
import FontAwesome from 'react-fontawesome'
const con = {
    form: [
        {
            //input props   
            id: "xdjfkssf",
            name: "name",
            type: "text",
            //label
            label: "moisfd",


        },
        {
            id: "pass",
            name: "pass",
            type: "password",
            //label
            label: "password",


        },
        {
            id: "passconfi",
            name: "passconfi",
            type: "password",
            //label
            label: "password confirm",


        }
    ],
    buttons: [


    ],
    columns: [
        {
            dataField: 'id',
            text: 'ID'
        },
        {
            dataField: 'transtype',
            text: 'transaction type'
        }, {
            dataField: 'creater',
            text: 'Creater'
        },
        {
            dataField: "trandate",
            text: "Date"
        },
        {
            
            text: "Control",
            formatter: (cellCnotent, row) => {
                return (
                        <Button color="primary" onClick={()=>{}}> <FontAwesome
                    name="edit"
                    style={{  fontSize: "20px"  }}
                  /></Button>
                  
                );
              }
        }
    ]
}
export default con;