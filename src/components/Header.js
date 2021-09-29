import React, { Component } from 'react'
import logo from "../assets/logoColor250px.png"
import './header.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Navbar, Nav, Col, Row ,Image} from 'react-bootstrap';
import { Link } from "react-router-dom"

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
 
        }
    }
    
    render() {
        return (
            <>

                <Row id="navbar-style">
                    <Navbar >
                        <Col lg={2}>  <Navbar.Brand ><Link to="/"><img id='logo' src={logo} alt="" /></Link></Navbar.Brand></Col>
                        <Col lg={8}>
                            <Nav className="me-auto">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/contactus" className="nav-link">Contact Us</Link>
                                <Link to="/ourmission" className="nav-link">Our Mission</Link>
                                <Link to="/jobcategories" className="nav-link">Job Categories</Link>
                                <Link to="/freelancerprofile" className="nav-link">Free Lancer Profile</Link>
                                <Link to="/FreeLancers" className="nav-link">Our FreeLancers</Link>
                                <Link to="/postjoboffer" className="nav-link">Post Job Offer</Link>
                            </Nav>
                        </Col>
                        <Col lg={2}>
                            {
                                this.props.auth0.isAuthenticated ?
                                    <>
                                        <LogoutButton />
                                        {/* <h1>{this.props.auth0.user.email}</h1> */}
                                        {/* <img src={this.props.auth0.user.picture} alt="" />  */}
                                        {/* <Button callApi={this.callApi} /> */}
                                    </> :
                                    // just to hide this button, if u want to use it remove the div 🔴
                                    <div style={{display:"none"}}>
                                        <LoginButton callApi={this.callApi} />
                                    </div>
                            }
                        </Col>
                    </Navbar>
                </Row>

            </>
        )
                        }     
    
}
export default withAuth0(Header)
