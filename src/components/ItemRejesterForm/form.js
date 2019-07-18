import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css'

function form() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="TradName">Trad Name</Label>
                    <Input type="text" name="name1" id="TradName" placeholder="Enter Trad Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="GeneralName">General Name</Label>
                    <Input type="text" name="name2" id="GeneralName" placeholder="Enter General Name" />
                </FormGroup>
                <Button className='bu'>submit</Button>

                <Button>clear</Button>
            </Form>
        </div>

    )

}

export default form;
