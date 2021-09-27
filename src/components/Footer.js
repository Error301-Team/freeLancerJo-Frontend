import React, { Component } from 'react'
import { Navbar, Container, Nav, Button, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import logo from "../assets/logoColor250px.png"
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <>
                <div className='navDown'>
                    <Navbar>
                        <Container>
                            <Col lg={2}>
                                <Navbar.Brand href="#home"><img id='logo' src={logo} alt="" /></Navbar.Brand>
                            </Col>
                            <Col lg={8}>
                                <Nav className="me-auto">
                                    {/* <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Our Mission</Nav.Link>
                                    <Nav.Link href="#pricing">Contact Us</Nav.Link> */}
                                    <span><h6 className='whiteText'>© FreeLancer Jo. 2021</h6></span>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                                </Nav>
                            </Col>
                            
                            <Col lg={2}  id="navicons">
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="github"
                                    style={{ backgroundColor: "#202020" }}
                                    href="https://github.com/creativetimofficial"
                                    id="tooltip495507257"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-github" />
                                    </span>
                                </Button>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    style={{ backgroundColor: "#202020" }}
                                    href="https://www.facebook.com/creativetim"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-facebook-square" />
                                    </span>
                                </Button>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="#384048"
                                    style={{ backgroundColor: "#202020" }}
                                    href="https://www.facebook.com/creativetim"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i class="fa fa-google" aria-hidden="true"></i>
                                    </span>
                                </Button>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    style={{ backgroundColor: "#202020" }}
                                    href="https://www.facebook.com/creativetim"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </span>
                                </Button>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    style={{ backgroundColor: "#202020" }}
                                    href="https://www.facebook.com/creativetim"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </span>
                                </Button>
                            </Col>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}

export default Footer
