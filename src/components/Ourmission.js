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

<<<<<<< Updated upstream
 <>
                <Spinner />            
            <div style={{ backgroundColor: 'white' }}>
                <div class="container-fluid rounded" >
                    <div class="row px-5" >


                    <div   class="col-sm-6 pad" style={{ marginTop: '100px', marginBottom: ' 75px', textAlign: 'justify' , position:'relative' , left:'3%'}}>

                    <Card  style={{ width: '40rem' , height:'23rem' }} >
  <Card.Body>
    <Card.Title style={{ color: "black" }}><h1>Our Mission</h1></Card.Title>
    <Card.Text>
        <p>
    We structure the technological, methodological and commercial frameworks. we open huge markets to their suppliers. For employability: The long-term vision and investment capacities of large companies make it possible to develop sustainable marketable expertise.
 </p>
 <p>
 We believe that platform and human expertise are inseparable. Private Platform: People need a platform that adapts to their internal operating rules and tools. They are looking for skills related to their projects, which are therefore clearly identified - so they need a personalized platform that helps them to filter the most relevant profiles.
 </p>
    </Card.Text>
  </Card.Body>
</Card>
                             {/* <h1 style={{ color: "" }}>Our Mission</h1>
                                <p>We think that big companies are locomotives. For the economy: They engage the biggest projects. They structure the technological, methodological and commercial frameworks. They open huge markets to their suppliers. For employability: The long-term vision and investment capacities of large companies make it possible to develop sustainable marketable expertise.</p> */}
=======
            
            <div style={{ backgroundColor: 'white' }} >
                <div class="container-fluid rounded" >
                    <div class="row px-5" >

                    <div className="p" class="col-sm-6 pad" style={{ marginTop: '130px', marginBottom: ' 170px', minHeight:"728px;"}}>
                             <h1 style={{ color: "" }}>Our Mission</h1>
                                <p>We think that big companies are locomotives. For the economy: They engage the biggest projects. They structure the technological, methodological and commercial frameworks. They open huge markets to their suppliers. For employability: The long-term vision and investment capacities of large companies make it possible to develop sustainable marketable expertise.</p>
>>>>>>> Stashed changes
                            </div>
                            
                        <div class="col-sm-6" style={{ marginTop: '100px', marginBottom: '75px' }}>
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