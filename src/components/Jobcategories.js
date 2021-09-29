import React, { Component } from 'react'
import Architecture from "../assets/Architecture.jpg";
import Designer from "../assets/Designer.jpg";
import Photography from "../assets/Photography.jpg";
import SoftwareDeveloper from "../assets/SoftwareDeveloper.jpg";
import Spinner from './Spinner';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import './Jobcategories.css';

import axios from 'axios';
import PJobOffers from './PJobOffers';
import { withAuth0 } from '@auth0/auth0-react'
class Jobcategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showFilteredJobs: false,
      search: "",
      saver: "",
      job: [],
      modalShow: false,
      name: "",
      category: "",
      location: "",
      phononumber: "",
      skills: "",
      tools: "",
      qualification: "",
      salary: "",
      description: "",
      update: false,
      newJobsArray: [],
    }
  }

  filter = async (e) => {
    let search = e.target.innerText;
    this.setState({
      search: search,
      showFilteredJobs: true,
    });
    let dbJobs = await axios.get(`https://freelancerjo-test.herokuapp.com/getJobs`)
    let results = dbJobs.data
    let result = results.filter(Element => Element.category == this.state.search);
    this.setState({
      job: result
    });
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
  submitHandle = async (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      description: this.state.description,
      email: this.props.auth0.user.email,
      category: this.state.category,
      location: this.state.location,
      skills: this.state.skills.split(','),
      tools: this.state.tools.split(','),
      qualification: this.state.qualification.split(','),
      salary: this.state.salary,
      phononumber: this.state.phononumber,
    }
    let job = await axios.post(`${process.env.REACT_APP_BACKEND_API_KEY}/createJob`, data);
    let result = job.data;
    let results = result.filter(Element => Element.category == this.state.search);
    this.setState({
      update: true,
      newJobsArray: results,
    })
  }
  handleChangeJobName = (e) => {
    let name = e.target.value;
    this.setState({
      name: name,
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
  back = () => {
    this.setState({
      showFilteredJobs: false
    })
  }
  render() {
    return (
      <div style={{ paddingTop: '134px',  paddingBottom:"178px", backgroundColor:"#2c394b"}}>
        {this.state.showFilteredJobs && <Spinner />}
        {
          this.state.showFilteredJobs ? <>
            {!(this.state.modalShow) &&

              <div style={{ backgroundColor: 'white' }}>
                <Card className="text-center" >
                  <Card.Header ><h1> Current Job Posts</h1> </Card.Header>
                  <Card.Body>
                    <Button onClick={this.back} variant="warning">Back</Button>
                    <Button onClick={this.setModalShow} variant="warning">Add New Job Offer</Button>
                  </Card.Body>

                </Card>

              </div>
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
                    {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control onChange={this.handleChangeEmail} type="email" placeholder="name@example.com" />
                          </Form.Group> */}
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
            {this.state.update ? <PJobOffers job={this.state.newJobsArray} search={this.state.search} /> : <PJobOffers job={this.state.job} search={this.state.search} />}

          </>


            :
            <>
              <Spinner />
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /><div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-8 col-lg-6">
                    <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                      <div class="line"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <div class="advisor_thumb"><img src={Architecture} alt="" />
                        </div>
                        <div class="single_advisor_details_info">

                          <p class="designation" value="Architecture" onClick={e => this.filter(e)}>Architect</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                      <div style={{borderRadius: "5px !important",boxShadow:"0 0 35px #060606 !important"}} class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" value="Designer" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <div class="advisor_thumb"><img src={Designer} alt="" />
                        </div>
                        <div class="single_advisor_details_info">

                          <p class="designation" onClick={e => this.filter(e)}>Design</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" value="Photography" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <div class="advisor_thumb"><img src={Photography} alt="" />
                        </div>
                        <div class="single_advisor_details_info">

                          <p class="designation" onClick={(e) => (this.filter(e))}>Photographer</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" value="Software Development" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <div class="advisor_thumb"><img src={SoftwareDeveloper} alt="" />
                        </div>
                        <div class="single_advisor_details_info">

                          <p class="designation" onClick={e => this.filter(e)}>Software Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
        }
      </div>

    )
  }

}
export default withAuth0(Jobcategories)