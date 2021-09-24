import React, { Component } from 'react'
import logo from "../assets/logowhite.png"
import './header.css';
import { Navbar, Container, Nav, Button, Col, DropdownButton, Dropdown } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img id='logo' src={logo} alt="" /></Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Our Mission</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Col>
                            <Button variant="light">Login</Button>{' '}
                            <Button variant="light">Sign Up</Button>{' '}
                        </Col>
                        <DropdownButton id="dropdown-item-button" title="Menu">
                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>;
                        
                    </Container>
                </Navbar>

            </>

        )
    }
}

export default Header
