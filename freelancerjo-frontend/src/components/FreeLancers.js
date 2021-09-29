import React, { Component } from 'react'
import './Phtography.css'
import axios from 'axios';
import Spinner from './Spinner';
import Phtography1 from './Phtography1';
import {
    Row,
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
            user: {},
            showUser: false
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
    show = (Element) => {
        this.setState({
            showUser: true,
            user: Element,
        })
    }
    hide = () => {
        this.setState({
            showUser: false,
        })
    }

    render() {
        if (this.state.showUser) {
            return <>
                <Spinner />
                <Button variant="warning" onClick={this.hide} >Back</Button>
                <Phtography1 job_describtion={this.state.user.job_describtion}
                    name={this.state.user.name}
                    phoneNumber={this.state.user.phoneNumber}
                    email={this.state.user.email}
                    location={this.state.user.location}
                    lauguages={this.state.user.lauguages}
                    skills={this.state.user.skills}
                    experience={this.state.user.experience}
                    price={this.state.user.price}
                    img={this.state.user.img}
                />
            </>
        }
        return (
            <>
                <Spinner />
                <br />
                <div className="gridCards1">
                <h1 class="h1FreeLancer">Our FreeLancers</h1>
                <hr />
                <h5>Filter by the field of work</h5>
                <br />
                <form class="formOption" onSubmit={this.handleSubmit} >
                    <Col md className="DropDownMenu">
                        <FloatingLabel controlId="floatingSelect" label="">
                            <Form.Select onChange={(e) => { this.handleSelect(e) }} className="bg-white  py-3" >
                                <option value={"all"}>Category :</option>
                                <option value={"Architecture"}>Architecture </option>
                                <option value={"Designer"}>Designer </option>
                                <option value={"Photography"}>Photography </option>
                                <option value={"Software Development"}>Software Development </option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <div class="buttonOption">
                        <Button style={{marginBottom: "15px"}} variant="warning" as="input" type="submit" value="Click Me To Filter" />{' '}
                    </div>
                </form>
                </div>
                <div className="gridCards">
                    {console.log(this.filterArray(this.state.users))}
                    {this.filterArray(this.state.users).map(Element => {
                        return (
                            <div onClick={e => this.show(Element)} style={{ borderRadius: "15px"}}>
                                <div class="image-flip" style={{ borderRadius: "15px"}}>
                                    <div class="mainflip flip-0" style={{ borderRadius: "15px"}}>
                                        <div class="frontside" style={{ borderRadius: "15px"}}>
                                            <div class="card" style={{ borderRadius: "15px"}}>
                                                <div class="card-body text-center" style={{ backgroundColor: 'white', borderRadius: "15px"}}>
                                                    <p><img class=" img-fluid" style={{ objectFit: 'cover' }} src={Element.img} alt="card image" /></p>
                                                    <h5 class="card-title">{Element.name}</h5>
                                                    <p class="card-text">{Element.job_describtion}</p>
                                                    <h6>Skills:</h6><p> {Element.skills}</p>
                                                    <h6>Rating:</h6><p> {Element.rating}</p>
                                                    <h6>Price Per/Hour:</h6><p> {Element.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="backside" style={{ borderRadius: "15px"}}>
                                            <div class="card" style={{ borderRadius: "15px"}}>
                                                <div class="card-body text-center mt-4" style={{ borderRadius: "15px"}}>
                                                    <h6 class="card-title">Experience:</h6><p> {Element.experience}</p>
                                                    {/* <h6 class="card-title">Education : "{Element.Education}"</h6> */}
                                                    <h6 class="card-title">Languages:</h6><p> {Element.lauguages}</p>
                                                    <h6 class="card-title">Location:</h6><p> {Element.location}</p>
                                                    <h6 class="card-title">Phone:</h6><p> {Element.phoneNumber}</p>
                                                    <h6 class="card-title">Email:</h6><p> {Element.email}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }
}
export default Phtography
