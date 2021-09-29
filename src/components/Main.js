import React, { Component } from 'react';
import './main.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import freeL from "../assets/freeL.jpg";
import mainImage from "../assets/HOMEPAGE.jpg";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Spinner from './Spinner';
// import Button from './Button';
import LogoutButton from './LogoutButton';
import Phtography from './FreeLancers'

class Main extends Component {

  callApi = () => {
    if (this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
        .then(res => {
          const jwt = res.__raw;
          const config = {
            headers: { "Authorization": `Bearer ${jwt}` },
            method: 'get',
            baseURL: process.env.REACT_APP_BACKEND_URL,
            url: '/auth'
          }
          axios(config)
            .then(result => console.log(result.data))
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    } else {
      console.log("user is not authenticated")
    }
  }

  render() {
    return (

      < div className="mainDiv" >
        <Spinner/>
        {
          this.props.auth0.isAuthenticated ?
            <>
              {/* <h1>{this.props.auth0.user.email}</h1> */}
              {/* <img src={this.props.auth0.user.picture} alt="" />  */}
              {/* <Button callApi={this.callApi} /> */}
            </> :
            <LoginButton callApi={this.callApi} />
        }
        
        <img className="mainImage" src={mainImage} alt="" style={{  objectFit: "cover", width: "100%",height: "100%",
    }}/>
        <Button
          className=" button1 "
          style={{ backgroundColor: '#ffc107bf' }}
          href="Phtography"
          onClick={e => e.preventDefault()

          }
        >
       Find FreeLancer
        </Button>

      </div >
    )
  }
}

export default withAuth0(Main)