import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Jobcategories from './components/Jobcategories';
import Accountform from './components/Accountform';
import Designs from './components/Designs';
import Developent from './components/Developent';
import Freelancerprofile from './components/Freelancerprofile'
import Phtography from './components/Phtography';
import Ourmission from './components/Ourmission';
import Contactus from './components/Contactus';
import PostJobOffer from './components/PostJobOffer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
// import { withAuth0 } from '@auth0/auth0-react'

import 'bootstrap/dist/css/bootstrap.min.css';
// import {  } from 'react-bootstrap';
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  // componentDidMount = () =>{
  //   axios.get().then(res=>{
  //     this.setState({
  //       data: res.data,
  //     })
  //   })
  // }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Main />
              </div>
              <Footer />
            </Route>
            <Route path="/contactus">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Contactus />
              </div>
              <Footer />
            </Route>
            <Route path="/jobcategories">
              <Header />
              <div style={{ minHeight: "455px" }}>
                <Jobcategories />
              </div>
              <Footer />
            </Route>
            <Route path="/accountform">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Accountform />
              </div>
              <Footer />
            </Route>
            <Route path="/designs">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Designs />
              </div>
              <Footer />
            </Route>
            <Route path="/developent">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Developent />
              </div>
              <Footer />
            </Route>
            <Route path="/freelancerprofile">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Freelancerprofile />
              </div>
              <Footer />
            </Route>
            <Route path="/phtography">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Phtography />
              </div>
              <Footer />
            </Route>
            <Route path="/ourmission">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <Ourmission />
              </div>
              <Footer />
            </Route>
            <Route path="/postjoboffer">
              <Header />
              <div style={{ minHeight: "580px" }}>
                <PostJobOffer />
              </div>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
