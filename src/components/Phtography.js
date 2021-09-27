import React, { Component } from 'react'
import './Phtography.css'
import axios from 'axios';
class Phtography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount = async () => {
        let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getUsers`)
        let result =data.data
        console.log(result);
        this.setState({
            users: result
        });
        console.log(this.state.users);
    }
    render() {
        return (
            <>
                {
                    this.state.users.map(Element => {
                        return (
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="image-flip" >
                                    <div class="mainflip flip-0">
                                        <div class="frontside">
                                            <div class="card">
                                                <div class="card-body text-center" style={{ backgroundColor: 'white' }}>
                                                    <p><img class=" img-fluid" src={Element.img} alt="card image" /></p>
                                                    <h5 class="card-title">Name : "{Element.name}"</h5>
                                                    <p class="card-text">Job Description :"{Element.job_describtion}"</p>
                                                    <h6>Skills : "{Element.skills}"</h6>
                                                    <h6>Rating: "{Element.rating}"</h6>
                                                    <h6>Price Per/Hour : "{Element.price}"</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="backside">
                                            <div class="card">
                                                <div class="card-body text-center mt-4">
                                                    <h6 class="card-title">Experience : "{Element.experience}"</h6>
                                                    {/* <h6 class="card-title">Education : "{Element.Education}"</h6> */}
                                                    <h6 class="card-title">Languages : "{Element.lauguages}"</h6>
                                                    <h6 class="card-title">Location : "{Element.location}"</h6>
                                                    <h6 class="card-title">Phone : "{Element.phoneNumber}"</h6>
                                                    <h6 class="card-title">Email : "{Element.email}"</h6>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default Phtography
