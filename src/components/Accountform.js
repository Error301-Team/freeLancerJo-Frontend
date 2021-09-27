import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import './Accountform.css'
class Accountform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            surname: '',
            name: '',
            phononumber: '',
            email: '',
            School: '',
            jobdescription: '',
            skills: "",
            lauguages: "",
            price: '',
            location: '',
            AreaOfStudys: '',
            Degree: '',
            experience: '',
            img: '',
            From: '',
            To: '',
            Education:{School:"", AreaOfStudys:"",Degree:"",To:"",From:""},
            usersList:[],
        }
    }
    submitHandle = async (e) => {
        e.preventDefault();
        let AreaOfStudys=this.state.To;
        let Degree=this.state.From;
        let To=this.state.AreaOfStudys;
        let From=this.state.AreaOfStudys;
        let School= this.state.School
        let data = {
            name: `${this.state.firstname} ${this.state.surname}`,
            phononumber: this.state.phononumber,
            email: this.state.email,
            img: this.state.img,
            jobdescription: this.state.jobdescription,
            skills: this.state.skills.split(','),
            lauguages: this.state.lauguages.split(','),
            price: this.state.price,
            location: this.state.location,
            experience: this.state.experience,
            Education:{AreaOfStudys:AreaOfStudys,Degree:Degree,From:From,To:To,School:School},
            // madeBy:"Wasem",
            // accoutType:"freelacer",
            // auth0:"done",   
        }
        console.log(data);
        let newUsersList=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/createUser`, data);
        console.log(newUsersList);


    }

    handleChangesurname = (e) => {
        let surname = e.target.value;
        this.setState({
            surname: surname
        })
    }

    handleChangephononumber = (e) => {
        let phononumber = e.target.value;
        this.setState({
            phononumber: phononumber
        })
    }

    handleChangeemail = (e) => {
        let email = e.target.value;
        this.setState({
            email: email
        })
    }

    handleChangeSchool = (e) => {
        let School = e.target.value;
        this.setState({
            School: School
        })
    }

    handleChangejobdescription = (e) => {
        let jobdescription = e.target.value;
        this.setState({
            jobdescription: jobdescription
        })
    }

    handleChangeskills = (e) => {
        let skills = e.target.value;
        this.setState({
            skills: skills
        })
    }

    handleChangelauguages = (e) => {
        let lauguages = e.target.value;
        this.setState({
            lauguages: lauguages
        })
    }

    handleChangeprice = (e) => {
        let price = e.target.value;
        this.setState({
            price: price

        })
    }

    handleChangelocation = (e) => {
        let location = e.target.value;
        this.setState({
            location: location
        })
    }

    handleChangeAreaOfStudys = (e) => {
        let AreaOfStudys = e.target.value;
        this.setState({
            AreaOfStudys: AreaOfStudys
        })
    }

    handleChangeDegree = (e) => {
        let Degree = e.target.value;
        this.setState({
            Degree: Degree
        })
    }

    handleChangeexperience = (e) => {
        let experience = e.target.value;
        this.setState({
            experience: experience
        })
    }

    handleChangeimg = (e) => {
        let img = e.target.value;
        this.setState({
            img: img
        })
    }
    handleChangeFrom = (e) => {
        let From = e.target.value;
        this.setState({
            From: From
        })
    }
    handleChangeTo = (e) => {
        let To = e.target.value;
        this.setState({
            To: To
        })
    }
    render() {
        return (
            <div class="container rounded bg-white mt-5 mb-5">
                <form onSubmit={this.submitHandle}>
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                            <div id='centerit' class="col-md-6"><label class="labels">Image Link:</label><input onChange={this.handleChangeimg} type="text" class="form-control" placeholder="Image Link" /></div>
                        </div>
                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">Profile Settings</h4>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6"><label class="labels" >Name</label><input onChange={this.handleChangename} type="text" class="form-control" placeholder="first name" /></div>
                                    <div class="col-md-6"><label class="labels">Surname</label><input onChange={this.handleChangesurname} type="text" class="form-control" placeholder="surname" /></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12"><label class="labels">Phone</label><input onChange={this.handleChangephononumber} type="text" class="form-control" placeholder="enter phone number" /></div>
                                    <div class="col-md-12"><label class="labels">Email ID</label><input onChange={this.handleChangeemail} type="text" class="form-control" placeholder="example@email.com" /></div>
                                </div>
                                <Form.Group as={Col} controlId="formGrid Experience">
                                    <Form.Label > Experience</Form.Label>
                                    <Form.Select onChange={this.handleChangeexperience} defaultValue="Choose...">
                                        <option>Entry Level</option>
                                        <option>Intermediate</option>
                                        <option> Expert</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGrid Experience">
                                    <Form.Label > Job Description</Form.Label>
                                    <Form.Select onChange={this.handleChangejobdescription} defaultValue="Choose...">
                                        <option>Architecture</option>
                                        <option>Designer</option>
                                        <option> Photography</option>
                                        <option> Software Development</option>
                                    </Form.Select>
                                </Form.Group>
                               
                                <div class="row mt-3">

                                <div class="col-md-12"><label class="labels">Languages</label><input onChange={this.handleChangelauguages} type="text" class="form-control" placeholder="enter Languages: ex (English, Arabic, french)" required /></div>
                                </div>
                                <br />
                                <hr />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 py-5">
                                <br />

                                <div class="col-md-12"><label class="labels">Location</label><input onChange={this.handleChangelocation} type="text" class="form-control" placeholder="123 Main Street, That house." /></div>
                                <div class="col-md-12"><label class="labels">Price Per/Hour</label><input onChange={this.handleChangeprice} type="text" class="form-control" placeholder="enter  Price Per/Hour" /></div>
                                <div class="col-md-12"><label class="labels">Skills</label><input onChange={this.handleChangeskills} type="text" class="form-control" placeholder="enter Skills: ex (creative, teamleader, Fast Learner)" required /></div>
                                <div class="col-md-12"><label class="labels">School</label><input onChange={this.handleChangeSchool} type="text" class="form-control" placeholder="University or College etc" /></div>
                                <div className="studies">
                                    <div class="col-md-12"><label class="labels">AreaOfStudys</label><input onChange={this.handleChangeAreaOfStudys} type="text" class="form-control" placeholder="AreaOfStudys" /></div>
                                    <div class="col-md-12"><label class="labels">Degree</label><input onChange={this.handleChangeDegree} type="text" class="form-control" placeholder="Degree" /></div>
                                    <div class="col-md-12"><label class="labels">From</label><input onChange={this.handleChangeFrom} type="text" class="form-control" placeholder="From" /></div>
                                    <div class="col-md-12"><label class="labels">To</label><input onChange={this.handleChangeTo} type="text" class="form-control" placeholder="To" /></div>
                                </div>
                            </div><br />
                            {/* <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience"  /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details"  /></div> */}
                        </div>
                    </div>
                </form>
            </div >




        )
    }

}






export default Accountform
