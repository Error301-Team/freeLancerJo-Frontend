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
<<<<<<< Updated upstream
                <Main />
                </div>
=======
              <div style={{ minHeight: "580px"}}>
                <Main />
              </div>
>>>>>>> Stashed changes
              <Footer />
            </Route>
            <Route path="/contactus">
              <div style={{ minHeight: "670px" }}>
              <Header />
<<<<<<< Updated upstream
                <Contactus />
=======
              <div style={{ minHeight: "580px"}}>
              <Contactus />
>>>>>>> Stashed changes
              </div>
              <Footer />
            </Route>
            <Route path="/jobcategories">
              <Header />
<<<<<<< Updated upstream
              <div style={{ minHeight: "590px" }}>
                <Jobcategories />
=======
              <div style={{ minHeight: "455px"}}>
              <Jobcategories />
>>>>>>> Stashed changes
              </div>
              <Footer />
            </Route>
            <Route path="/accountform">
              <Header />
<<<<<<< Updated upstream
              <div style={{ minHeight: "590px" }}>
                <Accountform />
=======
              <div style={{ minHeight: "580px"}}>
              <Accountform />
              </div>
              <Footer />
            </Route>
            <Route path="/designs">
              <Header />
              <div style={{ minHeight: "580px"}}>
              <Designs />
              </div>
              <Footer />
            </Route>
            <Route path="/developent">
              <Header />
              <div style={{ minHeight: "580px"}}>
              <Developent />
>>>>>>> Stashed changes
              </div>
              <Footer />
            </Route>
            <Route path="/freelancerprofile">
              <Header />
<<<<<<< Updated upstream
              <div style={{ minHeight: "590px" }}>
                <Freelancerprofile />
=======
              <div style={{ minHeight: "580px"}}>
              <Freelancerprofile />
>>>>>>> Stashed changes
              </div>
              <Footer />
            </Route>
            <Route path="/FreeLancers">
              <Header />
<<<<<<< Updated upstream
              <div style={{ minHeight: "590px" }}>
                <FreeLancers />
=======
              <div style={{ minHeight: "580px"}}>
              <Phtography />
>>>>>>> Stashed changes
              </div>
              <Footer />
            </Route>
            <Route path="/ourmission">
              <Header />
<<<<<<< Updated upstream
              <div style={{ minHeight: "590px" }}>
                <Ourmission />
=======
              <div style={{ minHeight: "580px"}}>
              <Ourmission />
>>>>>>> Stashed changes
              </div>
              <Footer />
            </Route>
            <Route path="/postjoboffer">
              <Header />
<<<<<<< Updated upstream
              <div style={{ minHeight: "590px" }}>
                <PostJobOffer />
              </div>
              <Footer />
            </Route>
            <Route path="/logintype">
              <Header />
              <div style={{ minHeight: "590px" }}>
                <Logintype />
=======
              <div style={{ minHeight: "580px"}}>
              <PostJobOffer />
>>>>>>> Stashed changes
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
