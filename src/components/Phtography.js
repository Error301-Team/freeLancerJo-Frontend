import React, { Component } from 'react'
import './Phtography.css'
import axios from 'axios';
import {
    Col,
    Form,
    FloatingLabel,
    Button
} from 'react-bootstrap';
class Phtography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showFilteredUsers: false,
            search: "",
            saver: "",
        }
    }
    componentDidMount = async () => {
        let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`)
        let result = data.data
        console.log(result);
        this.setState({
            users: result
        });
    }
    handleSelect = (e) => {
        let search = e.target.value;
        this.setState({
            search: search,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showFilteredUsers: true,
            saver: this.state.search,
        })
    }
    filterArray = (arr) => {
        if (this.state.showFilteredUsers === false) {
          return arr;
        }
        else if (this.state.search !== this.state.saver && this.state.saver !== "all") {
          return arr.filter(Element => {
            return Element.job_describtion === (this.state.saver);
          })
        }
        else if (this.state.search === "all") {
          this.setState({
            showFilteredUsers: false,
            saver: this.state.search,
          })
          return arr;
        }
        else if (this.state.search == "") {
          this.setState({
            showFilteredUsers: false,
            saver: "all",
          })
          return arr;
        }
        else if (this.state.showFilteredUsers === true) {
          return arr.filter(Element => {
            return Element.job_describtion === (this.state.search);
          })
    
        }
      }

render() {
    return (
        <><h1 class="h1FreeLancer">Our FreeLancers</h1><div className="gridCards">
            <form className="form"
                onSubmit={this.handleSubmit}
            >
                <Col md className="DropDownMenu">
                    <FloatingLabel controlId="floatingSelect" label="Filter by the field of work">
                        <Form.Select onChange={(e) => { this.handleSelect(e) }}
                        >
                            <option value={"all"}>Category :</option>
                            <option value={"Architecture"}>Architecture </option>
                            <option value={"Designer"}>Designer </option>
                            <option value={"Photography"}>Photography </option>
                            <option value={"Software Development"}>Software Development </option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Button as="input" type="submit" value="Click Me To Filter" />{' '}
            </form>
            {console.log(this.filterArray(this.state.users))}
            {this.filterArray(this.state.users).map(Element => {
                return (
                    <div>

                        <div class="image-flip">
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card">
                                        <div class="card-body text-center" style={{ backgroundColor: 'white' }}>
                                            <p><img class=" img-fluid" style={{ objectFit: 'cover' }} src={Element.img} alt="card image" /></p>
                                            <h5 class="card-title">{Element.name}</h5>
                                            <p class="card-text">{Element.job_describtion}</p>
                                            <h6>Skills: {Element.skills}</h6>
                                            <h6>Rating: {Element.rating}</h6>
                                            <h6>Price Per/Hour: {Element.price}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card">
                                        <div class="card-body text-center mt-4">
                                            <h6 class="card-title">Experience: {Element.experience}</h6>
                                            {/* <h6 class="card-title">Education : "{Element.Education}"</h6> */}
                                            <h6 class="card-title">Languages: {Element.lauguages}</h6>
                                            <h6 class="card-title">Location: {Element.location}</h6>
                                            <h6 class="card-title">Phone: {Element.phoneNumber}</h6>
                                            <h6 class="card-title">Email: {Element.email}</h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div></>
    )
}
}
export default Phtography
