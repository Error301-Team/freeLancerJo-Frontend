import React, { Component } from 'react'
import JobPost from "../assets/JobPost.png";
import { Button } from 'react-bootstrap'
 import './postjoboffer.css'
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
class PJobOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            job: [],
            showFilteredUsers: false,
            found: false,
            redirectTo: false,
            redirect: "",
            redirectBtn: "",
            id: "",
            alreadyApplied: "",
            applyBoolean: false,
            apply: [],
        }
    }
    submitHandle = async (e) => {
        // e.preventDefault();
        if (this.props.auth0.isAuthenticated) {
        let users = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`);
        let foundFreelancer = users.data.find(Element => Element.email == this.props.auth0.user.email);
        let getJobs = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getJobs`);
        let applied = getJobs.data.find(Element => Element._id == this.state.id).applied;
        let find = applied.find(Element => Element.email == this.props.auth0.user.email)
        if (find) {
            this.setState({
                alreadyApplied: find,
            })
        } else {
            let body = {
                applied: applied.concat(foundFreelancer),
            };
            let apply = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/updateJob/${this.state.id}`, body);
            let result = apply.data.filter(Element => Element.category==this.props.search);
            this.setState({
                apply: result,
                applyBoolean: true,
            })
        }
    }
    }
    hi2 = (tee) => {
        let id = tee
        this.setState({
            id: id
        })
        this.submitHandle();
    }
    render() {
        return (
            <div>
                {!(this.state.applyBoolean )?
                    this.props.job.map(element => {
                        return (
                            <div>
                                <section class="light">
                                    <div class="container py-2">

                                        <div class="h2 text-center " id="pageHeaderTitle">Job Post</div>


                                        <article class="postcard light ">
                                            <a class="postcard__img_link" href="#">
                                                <img class="postcard__img" src={JobPost} alt="Image Title" />
                                            </a>
                                            <div class="postcard__text ">

                                                <h3 class="postcard__title">{element.name}</h3>


                                                <div class="postcard__bar"></div>
                                                <h6><p>{element.category}</p></h6>
                                                <div class="postcard__preview-txt"><p>{element.description}</p></div>
                                                <div class="gridContent">
                                                    <h6>Skills:</h6><p>{element.skills}</p>
                                                    <h6>Tools:</h6><p>{element.tools}</p>
                                                    <h6>Qualifications:</h6><p>{element.qualification}</p>                                                  <h6>Salary:</h6><p>{`${element.salary} JOD`}</p>
                                                    <h6>Location:</h6><p>{element.location}</p>
                                                    <h6>Phone:</h6><p>{element.phononumber}</p>
                                                    <h6>Email:</h6><p>{element.email}</p>
                                                    {this.props.auth0.isAuthenticated&&element.applied.find(Element => Element.email == this.props.auth0.user.email) ? <Button variant="primary">Applied</Button> : <Button className="applyBtn" onClick={(e) => this.hi2(element._id)} variant="primary">Apply for this job</Button>}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </section>
                            </div>
                        )
                    }) : this.state.apply.map(element => {
                        return (
                            <div>
                                <section class="light">
                                    <div class="container py-2">
                                        <div class="h1 text-center " id="pageHeaderTitle">Job Post</div>
                                        <article class="postcard light ">
                                            <a class="postcard__img_link" href="#">
                                                <img class="postcard__img" src={JobPost} alt="Image Title" />
                                            </a>
                                            <div class="postcard__text ">
                                                <h1 class="postcard__title">{element.name}</h1>
                                                <div class="postcard__bar"></div>
                                                <h6><p>{element.category}</p></h6>
                                                <div class="postcard__preview-txt"><p>{element.description}</p></div>
                                                <div class="gridContent">
                                                    <h6>Skills:</h6><p>{element.skills}</p>
                                                    <h6>Tools:</h6><p>{element.tools}</p>
                                                    <h6>Qualifications:</h6><p>{element.qualification}</p>                                                  <h6>Salary:</h6><p>{`${element.salary} JOD`}</p>
                                                    <h6>Location:</h6><p>{element.location}</p>
                                                    <h6>Phone:</h6><p>{element.phononumber}</p>
                                                    <h6>Email:</h6><p>{element.email}</p>
                                                    {element.applied.find(Element => Element.email == this.props.auth0.user.email) ? <Button variant="primary">Applied</Button> : <Button className="applyBtn" onClick={(e) => this.hi2(element._id)} variant="primary">Apply for this job</Button>}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        )
            }
        }
export default withAuth0(PJobOffers);
            