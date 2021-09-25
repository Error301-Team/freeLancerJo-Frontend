import React, { Component } from 'react'
import logo from "../assets/logowhite.png"
import './header.css';
import { Navbar, Container, Nav, Button, Col, DropdownButton, Dropdown, Row } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>  <Container>
                        <Row>
                        
                <Navbar bg="dark" variant="dark">
                      <Col lg={4}>  <Navbar.Brand href="#home"><img id='logo' src={logo} alt="" /></Navbar.Brand></Col>
                      <Col lg={5}>  <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Our Mission</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav></Col>

                      
                        <Col lg={2}>
                            <Button variant="light">Login</Button>{' '}
                            <Button variant="light">Sign Up</Button>{' '}
                        </Col>

                        <Col lg={1} className="drop">   <DropdownButton id="dropdown-item-button" title="Menu">
                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>;</Col>
                     

                </Navbar>
</Row>
                    </Container>
            </>

        )
    }
}

export default Header
