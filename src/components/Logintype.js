import React, { Component } from 'react'
import { Form, ToggleButtonGroup, ToggleButton, Button, Card, ListGroupItem } from 'react-bootstrap'
import "./logintype.css"
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'
import Spinner from './Spinner';
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
            redirectTo:false,
            redirect: "",
            redirectBtn:"",
        }
    }
    componentDidMount = async () => {
        if (this.props.auth0.isAuthenticated) {
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
    }
    onChangeAccountForm=(e)=>{
        this.setState({
            redirectBtn: "/accountform",
        });
    }
    onChangeAccountForm=(e)=>{
        this.setState({
            redirectBtn: e.target.value,
        });
    }
    onChangeFreeLancerProfile=(e)=>{
        this.setState({
            redirectBtn: e.target.value,
        });
    }
    onSubmitForm =()=>{
        this.setState({
            redirectTo:true,
        });
    }

    render() {
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectBtn}/>
        }
        return (
            <div id="formstyle" style={{ padding: "50px" }}>
                <Spinner/>
                {!(this.state.showFilteredUsers)&&<Card className="p-3 mb-2 bg-light text-dark" style={{ width: '30rem', display: "table !important", margin: "auto" }}>
                    <Card.Img className="centerit" style={{ width: '5rem', borderRadius: "50%" }} variant="top" src="https://via.placeholder.com/100x100" />
                    <Card.Body>

                        <Card.Title style={{ display: "table", margin: "auto" , color:"black"}}>Complete Your Free Account Setup</Card.Title>
                        <br />
                        <ListGroupItem className="centerit" ></ListGroupItem>
                        <ListGroupItem className="centerit"><h5>I want to:</h5></ListGroupItem>
                        <br />
                        <Form onSubmit={this.onSubmitForm}>
                        <ToggleButtonGroup style={{ display: "table", margin: "auto" }} type="radio" name="options" defaultValue={1}>
                            <ToggleButton id="tbg-radio-1" variant="warning" value={"/jobcategories"} onChange={this.onChangeAccountForm} >
                                Hire for a project
                            </ToggleButton>
                            <ToggleButton style={{ width: "width: 180px", backgroundColor:"#ffff004d", color:"black"  }}  id="tbg-radio-2" value={"/accountform"} onChange={this.onChangeFreeLancerProfile}>
                                Works as a freelancer
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <br />
                        <hr />
                        <Form.Group className="mb-3" id="formGridCheckbox" style={{ fontSize: "13px" }}>
                            <Form.Check required id="checkit" type="checkbox" label="Yes, I understand and agree to the FreelancerJo Terms of Service." for="checkit" />
                        </Form.Group>
                        <Button className="centeritdef" type="submit" variant="warning">Create My Account</Button>{' '}
                        </Form>
                    </Card.Body>
                </Card>
                }
            </div>
        )
    }
}

export default withAuth0(Logintype)
