import React, { Component } from 'react'
import { Form, ToggleButtonGroup, ToggleButton, Button, Card, ListGroupItem } from 'react-bootstrap'
import "./logintype.css"
class Logintype extends Component {
    render() {
        return (
            <div id="formstyle" style={{padding: "50px"}}>
                <Card className="p-3 mb-2 bg-light text-dark" style={{ width: '30rem', display: "table !important", margin: "auto" }}>
                    <Card.Img className="centerit" style={{ width: '5rem', borderRadius: "50%" }} variant="top" src="https://via.placeholder.com/100x100" />
                    <Card.Body>

                        <Card.Title style={{ display: "table", margin: "auto" }}>Complete Your Free Account Setup</Card.Title>
                        <br />
                        <ListGroupItem className="centerit" >this.state.email</ListGroupItem>
                        <ListGroupItem className="centerit">I want to:</ListGroupItem>
                        <br />
                        <ToggleButtonGroup style={{ display: "table", margin: "auto" }} type="radio" name="options" defaultValue={1}>
                            <ToggleButton id="tbg-radio-1" value={1}>
                                Hire for a project
                            </ToggleButton>
                            <ToggleButton style={{ width: "width: 180px" }} id="tbg-radio-2" value={2}>
                                Works as a freelancer
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <br />
                        <hr />
                        <Form.Group className="mb-3" id="formGridCheckbox" style={{fontSize: "13px"}}>
                            <Form.Check id="checkit" type="checkbox" label="Yes, I understand and agree to the FreelancerJo Terms of Service."  for="checkit"/>
                        </Form.Group>

                        <Button className="centeritdef" variant="primary">Create My Account</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Logintype
