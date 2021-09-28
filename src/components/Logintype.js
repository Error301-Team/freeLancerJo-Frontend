import React, { Component } from 'react'
import { Form, ToggleButtonGroup, ToggleButton, Button, Card, ListGroupItem } from 'react-bootstrap'
import "./logintype.css"
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'
import {
    Redirect
  } from "react-router-dom";
class Logintype extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            job: [],
            showFilteredUsers: false,
            found: false,
            redirect: ""
        }
    }
    componentDidMount = async () => {
        let users = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`);
        let job = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getJobs`);
        this.setState({
            users: users.data,
            job: job.data
        })
        let foundFreelancer = (this.state.users).find(Element => Element.email == this.props.auth0.user.email);
        let foundJob = (this.state.job).find(Element => Element.email == this.props.auth0.user.email);
        if (foundFreelancer || foundJob) {
            this.setState({
                found: true,
            });
            if (foundFreelancer) {
                this.setState({
                    redirect: "/freelancerprofile",
                });
            }
            else if (foundJob) {
                this.setState({
                    redirect: "/jobcategories",
                });
            }
        }
    }


    render() {
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        
        return (
            <div id="formstyle" style={{ padding: "50px" }}>
                {!(this.state.found) && <Card className="p-3 mb-2 bg-light text-dark" style={{ width: '30rem', display: "table !important", margin: "auto" }}>
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
                        <Form.Group className="mb-3" id="formGridCheckbox" style={{ fontSize: "13px" }}>
                            <Form.Check id="checkit" type="checkbox" label="Yes, I understand and agree to the FreelancerJo Terms of Service." for="checkit" />
                        </Form.Group>

                        <Button className="centeritdef" variant="primary">Create My Account</Button>{' '}
                    </Card.Body>
                </Card>}
            </div>
        )
    }
}

export default withAuth0(Logintype)
