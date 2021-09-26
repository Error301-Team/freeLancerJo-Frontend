import React, { Component } from 'react'
import './Contactus.css'
import ContactUs from "../assets/ContactUs.jpg";

class Contactus extends Component {
    render() {
        return (
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
                            <form class="rounded msg-form">
                                <div class="form-group"> <label for="name" class="h6">Your Name</label>
                                    <div class="input-group border rounded">
                                        <div class="input-group-addon px-2 pt-1">
                                            <p class="fa fa-user-o text-primary"></p>
                                        </div> <input type="text" class="form-control border-0" />
                                    </div>
                                </div>
                                <div class="form-group"> <label for="name" class="h6">Email</label>
                                    <div class="input-group border rounded">
                                        <div class="input-group-addon px-2 pt-1"> <i class="fa fa-envelope text-primary"></i> </div> <input type="text" class="form-control border-0" />
                                    </div>
                                </div>
                                <div class="form-group"> <label for="msg" class="h6">Message</label> <textarea name="message" id="msgus" cols="10" rows="5" class="form-control bg-light" placeholder="Message"></textarea> </div>
                                <div class="form-group d-flex justify-content-end"> <input type="submit" class="btn btn-primary text-white" value="send message" /> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactus
