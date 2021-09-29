import React, { Component } from 'react'
import './Contactus.css'
import ContactUs from "../assets/ContactUs.jpg";
import Spinner from './Spinner';
import { Card } from 'react-bootstrap';
// import SweetAlert from 'react-bootstrap-sweetalert';



class Contactus extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         alert: false,
    //     };
    // }  

    // showAlert = () => {
    //   this.setState({
    //     alert: true,
    //   })
    // };
    render() {
        return (
            <>
                <Spinner />
                <div style={{ backgroundColor: 'white' }}>
                    <div class="container-fluid rounded" >
                        <div className="p">


                        </div>
                        <div class="row px-5" >
                            <div class="col-sm-6" style={{ marginTop: '0px', marginBottom: '18px' }}>
                                <img class="imageCO" src={ContactUs} title="this.props.profilePic" alt="" />
                            </div>




                            <div class="col-sm-6 pad" style={{ marginTop: '30px', marginBottom: '18px' }}>



                                <Card style={{ width: '42rem' }}>

                                    <Card.Body>
                                        <Card.Title style={{ color: 'black' }}> <h1>Contact Us</h1></Card.Title>
                                        <Card.Text> <p class="text-secondary" >Our Team will get back to you within in 24 hours</p>    </Card.Text>

                                        <Card.Text>
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


                                        </Card.Text>

                                    </Card.Body>


                                </Card>

                                {/* <>
            <section className = "hero">
                <nav>
                    <h2>Book Exchange</h2>
                    <button onClick = {this.showAlert}>Logout</button>
                </nav>
            </section>
            { 
                this.state.alert && <SweetAlert
                    title="Here's a message!"
                    onConfirm={this.props.handleLogout}
                    onCancel={this.onCancel}
                    showCancel={true}
                    focusCancelBtn={true}
                    />
             }
            </>
               */}

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contactus