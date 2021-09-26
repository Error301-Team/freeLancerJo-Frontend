import React, { Component } from 'react'
import './Phtography.css'

class Phtography extends Component {
    render() {

        const {
           //Front
            ProfilePicture,
            Name,
            JobDescription,
            Skills,
            Rating,
            PricePerHour,
            //Back
            Experience,
            Education,
            Languages,
            Location,
            Phone,
            Email,
        }=this.props

        return (
            
       
<>
                <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center" style={{backgroundColor:'white'}}>
                                    <p><img class=" img-fluid" src="{ProfilePicture}" alt="card image"/></p>
                                    <h5 class="card-title">Name : "{Name}"</h5>
                                    <p class="card-text">Job Description :"{JobDescription}"</p>
                                    <h6>Skills : "{Skills}"</h6>
                                    <h6>Rating: "{Rating}"</h6>
                                    <h6>Price Per/Hour : "{PricePerHour}"</h6>

                                   
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h6 class="card-title">Experience : "{Experience}"</h6>
                                    <h6 class="card-title">Education : "{Education}"</h6>
                                    <h6 class="card-title">Languages : "{Languages}"</h6>
                                    <h6 class="card-title">Location : "{Location}"</h6>
                                    <h6 class="card-title">Phone : "{Phone}"</h6>
                                    <h6 class="card-title">Email : "{Email}"</h6>

                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Phtography
