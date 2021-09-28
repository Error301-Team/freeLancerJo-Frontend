import React, { Component } from 'react';
import OurMission from "../assets/OurMission.jpg";
import Spinner from './Spinner';
import {
    Card
} from 'react-bootstrap';

import './Ourmission.css'


export class Ourmission extends Component {
    render() {
        return (

            <>
                <Spinner />
                <div style={{ backgroundColor: 'white' }}>
                    <div class="container-fluid rounded" >
                        <div class="row px-5" >


                            <div class="col-sm-6 pad" style={{ marginTop: '130px', marginBottom: ' 170px', textAlign: 'justify', position: 'relative', left: '10%' }}>

                                <Card style={{ width: '25rem', height: '23rem' }} >
                                    <Card.Body>
                                        <Card.Title style={{ color: "black" }}>Our Mission</Card.Title>
                                        <Card.Text>
                                            We think that big companies are locomotives. For the economy: They engage the biggest projects. They structure the technological, methodological and commercial frameworks. They open huge markets to their suppliers. For employability: The long-term vision and investment capacities of large companies make it possible to develop sustainable marketable expertise.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {/* <h1 style={{ color: "" }}>Our Mission</h1>
                                <p>We think that big companies are locomotives. For the economy: They engage the biggest projects. They structure the technological, methodological and commercial frameworks. They open huge markets to their suppliers. For employability: The long-term vision and investment capacities of large companies make it possible to develop sustainable marketable expertise.</p> */}
                            </div>

                            <div class="col-sm-6" style={{ marginTop: '100px', marginBottom: ' 170px' }}>
                                <img src={OurMission} title="this.props.profilePic" alt="" />
                            </div>



                        </div>

                    </div>
                </div>
            </>


        )
    }
}
export default Ourmission
