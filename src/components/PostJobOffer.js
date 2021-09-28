import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Modal, Card } from 'react-bootstrap';
import './JobPosts.css';
import PJobOffers from './PJobOffers';
class PostJobOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            email: '',
            category: '',
            location: '',
            skills: "",
            tools: "",
            qualification: "",
            salary: '',
            phononumber: '',
            modalShow: false,
            update:false,
            job: [],
            newJobsArray:[]
        }
    }
    submitHandle = async (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            description: this.state.description,
            email: this.state.email,
            category: this.state.category,
            location: this.state.location,
            skills: this.state.skills.split(','),
            tools: this.state.tools.split(','),
            qualification: this.state.qualification.split(','),
            salary: this.state.salary,
            phononumber: this.state.phononumber,
        }
        console.log(process.env.REACT_APP_BACKEND_API_KEY);
        let job = await axios.post(`${process.env.REACT_APP_BACKEND_API_KEY}/createJob`, data);
        let result=job.data
        this.setState({
            update:true,
            newJobsArray:result,
        })
    }

    setModalShow = () => {
        this.setState({
            modalShow: true,
        })
    }

    onHide = () => {
        this.setState({
            modalShow: false,
        })
    }

    handleChangeJobName = (e) => {
        let name = e.target.value;
        this.setState({
            name: name,
        })
    }


    handleChangeEmail = (e) => {
        let email = e.target.value;
        this.setState({
            email: email,
        })
    }

    handleChangeCategory = (e) => {
        let category = e.target.value;
        this.setState({
            category: category,
        })
    }

    handleChangeLocation = (e) => {
        let location = e.target.value;
        this.setState({
            location: location,
        })
    }

    handleChangePhone = (e) => {
        let phone = e.target.value;
        this.setState({
            phononumber: phone,
        })
    }

    handleChangeskills = (e) => {
        let skills = e.target.value;
        this.setState({
            skills: skills,
        })
    }

    handleChangeTools = (e) => {
        let tools = e.target.value;
        this.setState({
            tools: tools,
        })
    }

    handleChangeQualification = (e) => {
        let qualification = e.target.value;
        this.setState({
            qualification: qualification,
        })
    }

    handleChangeSalary = (e) => {
        let salary = e.target.value;
        this.setState({
            salary: salary,
        })
    }

    handleChangeDescription = (e) => {
        let description = e.target.value;
        this.setState({
            description: description,
        })
    }
    componentDidMount = async () => {

        let dbJobs = await axios.get(`https://freelancerjo-test.herokuapp.com/getJobs`)
        console.log(typeof (dbJobs))
        let results = dbJobs.data
        this.setState({
            job: results
        })

    }
    render() {
        return (

            <div style={{ backgroundColor: 'white' }}>

                {!(this.state.modalShow) &&


                    <Card className="text-center" >
                        <Card.Header ><h3> Current Job Post</h3> </Card.Header>
                        <Card.Body>

                            <Button onClick={this.setModalShow} variant="warning">Add New Job Offer</Button>
                        </Card.Body>

                    </Card>


                    // <Button onClick={this.setModalShow} variant="primary">Primary</Button>
                }
                {this.state.modalShow &&
                    <><Modal.Dialog
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header>
                            <Modal.Title>Job Offer:</Modal.Title>
                        </Modal.Header>

                        <Form onSubmit={this.submitHandle}>
                            <Modal.Body>
                                <Form.Control onChange={this.handleChangeJobName} type="text" placeholder="Job Name" />
                                <br />
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange={this.handleChangeEmail} type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <br />
                                <Form.Select onChange={this.handleChangeCategory} aria-label="Default select example">
                                    <option>Select a Category</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Software Develope">Software Develope</option>
                                    <option value="Design">Design</option>
                                    <option value="Photographer">Photographer</option>
                                </Form.Select>
                                <br />
                                <Form.Control onChange={this.handleChangeLocation} type="text" placeholder="Location" />
                                <br />
                                <Form.Control onChange={this.handleChangePhone} type="text" placeholder="Phone Number" />
                                <br />
                                <Form.Control onChange={this.handleChangeskills} type="text" placeholder="skills: ex (creative, teamleader, Fast Learner)" />
                                <br />
                                <Form.Control onChange={this.handleChangeTools} type="text" placeholder="Tools: ex (Photoshop, Adope XD, Illustrator)" />
                                <br />
                                <Form.Control onChange={this.handleChangeQualification} type="text" placeholder="Qualification: (Education level, desired Experience)" />
                                <br />
                                <Form.Control onChange={this.handleChangeSalary} type="text" placeholder="Salary: (Expected Salary)" />
                                <br />
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control onChange={this.handleChangeDescription} as="textarea" rows={3} />
                                </Form.Group>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button class="cancelBtn" onClick={this.onHide} variant="secondary">Cancel</Button>
                                <Button class="submitBtn" variant="" style={{ backgroundColor: '#ffc107' }} type="submit">
                                    Submit
                                </Button>

                                <Button class="createBtn" variant="" style={{ backgroundColor: '#ffc107' }} onClick={this.setModalShow}>
                                    Create a New Job Offer
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Dialog>

                    </>
                }
            {this.state.update?<PJobOffers job={this.state.newJobsArray}/>:  <PJobOffers job={this.state.job}/>}

            </div>
        )
    }
}

export default PostJobOffer