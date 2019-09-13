import React from"react";
import {Button} from 'reactstrap'
import FontAwesome from "react-fontawesome"
const config={
    form:[
        {
            //input props   
            id :"xdjfkssf",
            name:"name",
            type:"text",
            //label
            label:"moisfd",
           
            
        },
        {
            id :"pass",
            name:"pass",
            type:"password",
            //label
            label:"password",
            
            
        },
        {
            id :"passconfi",
            name:"passconfi",
            type:"password",
            //label
            label:"password confirm",
            
            
        }
    ],
    buttons:[
        

    ],
    columns : [{
        dataField: 'name',
        text: 'Name'
      }, {
        dataField: 'location',
        text: 'Location'
      }
      ,{
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
    ]

}
export default config;