import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import axios from 'axios';
import './freelancerProfile.css'
import { withAuth0 } from '@auth0/auth0-react';
import Spinner from './Spinner';
export class Freelancerprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}

        }
    }

    componentDidMount = async () => {
        if (this.props.auth0.isAuthenticated) {
            let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`)
            console.log(data);
            console.log(this.props.auth0.user.email)
            let result = data.data.find(user => user.email == this.props.auth0.user.email)
            this.setState({
                users: result
            });
        }
    }

    render() {
        return (
            <>
                <Spinner />
                <section class="section about-section gray-bg" id="about">
                    <div class="container">
                        <div class="row align-items-center flex-row-reverse">
                            <div class="col-lg-6">
                                <div class="about-text go-to">
                                    <h3 class="dark-color">About Me</h3>
                                    {console.log(this.state.users)}
                                    <h6 class="theme-color lead"></h6>
                                    <p><mark>{this.state.users.job_describtion}</mark>.</p>
                                    <div class="row about-list">
                                        <div class="col-md-6">
                                            <div class="media">
                                                <label>Name</label>
                                                <p>{this.state.users.name}</p>
                                            </div>
                                            <div class="media">
                                                <label>Phone </label>
                                                <p>{this.state.users.phoneNumber}</p>
                                            </div>
                                            <div class="media">
                                                <label>Email</label>
                                                <p>{this.state.users.email}</p>
                                            </div>
                                            <div class="media">
                                                <label>Location</label>
                                                <p>{this.state.users.location}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="media">
                                                <label>Languages</label>
                                                <p>{this.state.users.lauguages}</p>
                                            </div>
                                            <div class="media">
                                                <label> Skills</label>
                                                <p>{this.state.users.skills}</p>
                                            </div>
                                            <div class="media">
                                                <label>Experience</label>
                                                <p>{this.state.users.experience}</p>
                                            </div>
                                            <div class="media">
                                                <label>Price</label>
                                                <p>{this.state.users.price}$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-avatar">
                                    <img src={this.state.users.img} title="this.props.profilePic" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="counter">
                            <div class="row">
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="500" data-speed="500">500</h6>
                                        <p class="m-0px font-w-600">Happy Clients</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="150" data-speed="150">150</h6>
                                        <p class="m-0px font-w-600">Project Completed</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="850" data-speed="850">850</h6>
                                        <p class="m-0px font-w-600">Photo Capture</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="190" data-speed="190">190</h6>
                                        <p class="m-0px font-w-600">Telephonic Talk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withAuth0(Freelancerprofile)
