import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Jobcategories from './components/Jobcategories';
import Accountform from './components/Accountform';
import Freelancerprofile from './components/Freelancerprofile'
import FreeLancers from './components/FreeLancers';
import Ourmission from './components/Ourmission';
import Contactus from './components/Contactus';
import PostJobOffer from './components/PostJobOffer';
import Logintype from './components/Logintype';
import Spinner from './components/Spinner';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'

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
            <div style={{ minHeight: "590px" }}>
              <Header />
                <Main />
                </div>
              <Footer />
            </Route>
            <Route path="/contactus">
              <div style={{ minHeight: "670px" }}>
              <Header />
                <Contactus />
              </div>
              <Footer />
            </Route>
            <Route path="/jobcategories">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <Jobcategories />
              </div>
              <Footer />
            </Route>
            <Route path="/accountform">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <Accountform />
              </div>
              <Footer />
            </Route>
            <Route path="/freelancerprofile">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <Freelancerprofile />
              </div>
              <Footer />
            </Route>
            <Route path="/FreeLancers">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <FreeLancers />
              </div>
              <Footer />
            </Route>
            <Route path="/ourmission">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <Ourmission />
              </div>
              <Footer />
            </Route>
            <Route path="/postjoboffer">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <PostJobOffer />
              </div>
              <Footer />
            </Route>
            <Route path="/logintype">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <Logintype />
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
