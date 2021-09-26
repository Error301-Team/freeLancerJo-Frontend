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
//import AllFreeLancer from './components/AllFreeLancer';
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
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Main />
              <Footer />
            </Route>
            <Route path="/contactus">
              <Header />
              <Contactus />
              <Footer />
            </Route>
            <Route path="/jobcategories">
              <Header />
              <Jobcategories />
              <Footer />
            </Route>
            <Route path="/accountform">
              <Header />
              <Accountform />
              <Footer />
            </Route>
            <Route path="/designs">
              <Header />
              <Designs />
              <Footer />
            </Route>
            <Route path="/developent">
              <Header />
              <Developent />
              <Footer />
            </Route>
            <Route path="/freelancerprofile">
              <Header />
              <Freelancerprofile />
              <Footer />
            </Route>
            <Route path="/phtography">
              <Header />
              <Phtography />
              <Footer />
            </Route>
            <Route path="/ourmission">
              <Header />
              <Ourmission />
              <Footer />
            </Route>

            
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
