import React ,{Component} from "react"

import {FormGroup
    ,Form
    ,Input
    ,Col
    ,Button
    ,Label
} from 'reactstrap'

class Forms extends Component{
    
    state={
        data:{form:[
            {
                //input props   
                id :"username",
                name:"username",
                type:"text",
                
                //label
                label:"username",
               
                
            },
            {
                id :"exampleCheck",
                name:"select",
                type:"select",
                select:[
                    "1",
                    "1",
                    "3"
                ],
                //label
                label:"password",
                
                
            }
        ],
        buttons:[
            {
                text:"save"
            },{
                text:"reset"

            }

        ]
    
    }
    }
    render(){
        const data = this.state.data
        return (
            <Form>
                {data.form.map((item,i)=>(
                    <FormGroup key={i} row>
                        <Label sm={2} for={item.id}>{item.label}</Label>
                        <Col sm={10}>
                            <Input {...item}>
                            {item.select 
                                != null ?
                                item.select.map((option,i)=>(
                                    <option key={i}>{option}</option>
                                )) :
                                ""
                                }>
                                
                                </Input>
                        </Col>
                    </FormGroup>
                ))}
                <FormGroup row>
                {data.buttons.map((item,i)=>(
                    <Col sm={1 }>
                    <Button primary>{item.text}</Button>
                    </Col>
                
                ))}
                </FormGroup>
               
            </Form>
        )
    }
}


export default Forms;