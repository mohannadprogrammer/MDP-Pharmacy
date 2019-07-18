import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './form.css'

function form() {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="TradName">Trad Name</Label>
                            <Input type="text" name="name1" id="TradName" placeholder="Enter Trad Name" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="GeneralName">General Name</Label>
                            <Input type="text" name="name2" id="GeneralName" placeholder="Enter General Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="Category">Category</Label>
                            <Input type="select" name="selectCategory" id="Category">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="Supplier">Supplier</Label>
                            <Input type="select" name="selectSupplier" id="Supplier">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="sellingPrice">Selling Price</Label>
                            <Input type="number" name="selPrice" id="sellingPrice" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="mimumlevel">Minimum Level</Label>
                            <Input type="number" name="level" id="mimumlevel" />
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="submit" className='bu'>submit</Button>

                <Button type='reset'>clear</Button>
            </Form>
        </Container >

    )

}

export default form;
