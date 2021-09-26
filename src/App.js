import React, { Component } from 'react'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardForFreelancer from './components/CardForFreelancer';
import FreeLancerForm from './components/FreeLancerForm';
import axios from 'axios'
// import { withAuth0 } from '@auth0/auth0-react'

import 'bootstrap/dist/css/bootstrap.min.css';
// import {  } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
        <CardForFreelancer/>
        <FreeLancerForm />
      </>
    )
  }
}

export default App
