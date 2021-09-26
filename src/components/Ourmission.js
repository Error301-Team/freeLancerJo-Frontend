import React, { Component } from 'react';
import OurMission from "../assets/OurMission.jpg";

export class Ourmission extends Component {
    render() {
        return (

            
            <div style={{ backgroundColor: 'white' }}>
                <div class="container-fluid rounded" >
                    <div class="row px-5" >


                    <div className="p" class="col-sm-6 pad" style={{ marginTop: '130px', marginBottom: ' 170px' }}>
                             <h1 style={{ color: "" }}>Our Mission</h1>
                                <p>We think that big companies are locomotives. For the economy: They engage the biggest projects. They structure the technological, methodological and commercial frameworks. They open huge markets to their suppliers. For employability: The long-term vision and investment capacities of large companies make it possible to develop sustainable marketable expertise.</p>
                            </div>
                            
                        <div class="col-sm-6" style={{ marginTop: '100px', marginBottom: ' 170px' }}>
                            <img src={OurMission} title="this.props.profilePic" alt="" />
                        </div>
                  

                        
                        </div>

                    </div>
                </div>
     


        )
    }
}
export default Ourmission
