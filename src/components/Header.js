import React, { Component } from 'react'
import logo from "../assets/logoColor250px.png"
import './header.css';
import { Navbar, Container, Nav, Button, Col, DropdownButton, Dropdown, Row, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom"
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// import Button from './components/Button';
class Header extends Component {
   

    callApi = () => {
        if (this.props.auth0.isAuthenticated) {
            this.props.auth0.getIdTokenClaims()
                .then(res => {
                    const jwt = res.__raw;
                    const config = {
                        headers: { "Authorization": `Bearer ${jwt}` },
                        method: 'get',
                        baseURL: process.env.REACT_APP_BACKEND_URL,
                        url: '/auth'
                    }
                    axios(config)
                        .then(result => console.log(result.data))
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        } else {
            console.log("user is not authenticated")
        }
    }

    render() {
        return (
            <>

                <div className='navBack'>
                    <Container>
                        <Row>

                            <Navbar >
                                <Col lg={2}>  <Navbar.Brand href="/"><img id='logo' src={logo} alt="" /></Navbar.Brand></Col>
                                <Col lg={8}>
                                    <Nav className="me-auto">
                                        <Link to="/" className="nav-link">Home</Link>
                                        <Link to="/contactus" className="nav-link">Contact Us</Link>
                                        <Link to="/ourmission" className="nav-link">Our Mission</Link>
                                        <Link to="/jobcategories" className="nav-link">Job Categories</Link>
                                        <Link to="/accountform" className="nav-link">accountform</Link>
                                        <Link to="/designs" className="nav-link">designs</Link>
                                        <Link to="/developent" className="nav-link">developent</Link>
                                        <Link to="/freelancerprofile" className="nav-link">freelancerprofile</Link>
                                        <Link to="/phtography" className="nav-link">phtography</Link>
                                        <Link to="/postjoboffer" className="nav-link">Post Job Offer</Link>
                                        <Link to="/logintype" className="nav-link">login type</Link>
                                    </Nav>
                                </Col>
                                <Col lg={2} className="login">
                                    {
                                        this.props.auth0.isAuthenticated ?
                                            <>
                                                <LogoutButton />
                                                {/* <h1>{this.props.auth0.user.name}</h1>
                                                <img src={this.props.auth0.user.picture} alt="" /> */}
                                                <Button callApi={this.callApi} />
                                            </> :
                                            <LoginButton />
                                    }
                                    {/* <Button variant="light">Login</Button>{' '} */}
                                    {/* <Button variant="light">Sign Up</Button>{' '} */}
                                    {/* <button onClick={this.state.callApi}>
                                        call AUTH api
                                    </button> */}
                                </Col>
                            </Navbar>
                        </Row>
                    </Container>
                </div>


            </>

        )
    }
}

export default withAuth0(Header)
