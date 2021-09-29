import React, { Component } from 'react'
import './Contactus.css'
import ContactUs from "../assets/ContactUs.jpg";
import SweetAlert from 'react-bootstrap-sweetalert';

import Spinner from './Spinner';
class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideAlert: false,
        }
    }
    // onConfirm = () => {
    //     this.setState({
    //         hideAlert: true,
    //     })
    // }

    render() {
        return (
            <>
                <Spinner />
                <div style={{ backgroundColor: 'white' }}>
                    <div class="container-fluid rounded" >
                        <div className="p">

                            <p class="text-secondary" >Fill up the form and our Team will get back to you within in 24 hours</p>

                        </div>
                        <div class="row px-5" >
                            <div class="col-sm-6" style={{ marginTop: '100px', marginBottom: ' 170px' }}>
                                <img src={ContactUs} title="this.props.profilePic" alt="" />


                            </div>
                            <div class="col-sm-6 pad" style={{ marginTop: '130px', marginBottom: ' 170px' }}>

                                <h1>Contact Us</h1>
                                <form class="rounded msg-form">

                                    <div class="form-group">
                                        <label for="name" class="h6">Your Name</label>
                                        <div class="input-group border rounded">
                                            <div class="input-group-addon px-2 pt-1">
                                                <p class="fa fa-user-o text-warning"></p>
                                            </div> <input type="text" class="form-control border-0" />
                                        </div>
                                    </div>
                                    <div class="form-group"> <label for="name" class="h6">Email</label>
                                        <div class="input-group border rounded">
                                            <div class="input-group-addon px-2 pt-1"> <i class="fa fa-envelope text-warning"></i> </div> <input type="text" class="form-control border-0" />
                                        </div>
                                    </div>
                                    <div class="form-group"> <label for="msg" class="h6">Message</label> <textarea name="message" id="msgus" cols="10" rows="5" class="form-control bg-light" placeholder="Message"></textarea> </div>
                                    <div class="form-group d-flex justify-content-end"> <input type="submit" class="btn btn-warning text-white" value="send message" /> </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <SweetAlert success title="Good job!" onConfirm={this.onConfirm} onCancel={this.onCancel}>
                    You clicked the button!
                </SweetAlert>
            </>
        )
    }
}

export default Contactus
