import React, { Component } from 'react'
import logo from "../assets/logoColor250px.png"
import './header.css';
import { Navbar, Container, Nav, Button, Col, DropdownButton, Dropdown, Row, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom"
class Header extends Component {
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

                                    </Nav>
                                </Col>
                                <Col lg={2} className="login">
                                    <Button variant="light">Login</Button>{' '}
                                    <Button variant="light">Sign Up</Button>{' '}
                                </Col>
                            </Navbar>
                        </Row>
                    </Container>
                </div>

            </>

        )
    }
}

export default Header
