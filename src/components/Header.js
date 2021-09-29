import React, { Component } from 'react'
import logo from "../assets/logoColor250px.png"
import './header.css';
import { Navbar, Container, Nav, Col, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            userName: '',
            Authenticated: false,
        }
    }
    componentDidMount = async () => {
        if (!(this.props.auth0.isAuthenticated)) {
            console.log("object")
        }
        if (this.props.auth0.isAuthenticated) {
            console.log(this.state.dontShow)
            let users = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`);
            let foundFreelancer = await users.data.find(Element => Element.email == this.props.auth0.user.email);
            if (foundFreelancer) {
                console.log(foundFreelancer);
                if (foundFreelancer.img && foundFreelancer.img.includes("https")) {
                    this.setState({
                        img: foundFreelancer.img,
                        userName: foundFreelancer.name
                    });
                } else {
                    this.setState({
                        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        userName: foundFreelancer.name
                    });
                    console.log("hi")
                }
            } else if (!(foundFreelancer)) {
                this.setState({
                    img: this.props.auth0.user.picture,
                    userName: this.props.auth0.user.given_name.concat(" ", this.props.auth0.user.family_name)
                })
            }

        }
    }
    render() {

        return (
            <>
                <div className='navBack'> 
                    <Container>
                        <Row>

                            <Navbar >
                                <Col lg={2}>  <Navbar.Brand ><Link to="/"><img id='logo' src={logo} alt="" /></Link></Navbar.Brand></Col>
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
                                        {this.props.auth0.isAuthenticated && <><Image className="img" src={this.state.img} roundedCircle />
                                            <Navbar.Text>
                                                <Link to="/freelancerprofile" className="nav-link">{this.state.userName}</Link>
                                            </Navbar.Text></>}
                                        {console.log(this.state.img)}
                                    </Nav>
                                </Col>
                                {/* <Col lg={2} className="login">
                                    
                                </Col> */}
                            </Navbar>
                        </Row>
                    </Container>
                </div>


            </>

        )
    }
}

export default withAuth0(Header)
