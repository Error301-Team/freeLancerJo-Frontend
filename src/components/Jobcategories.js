import React, { Component } from 'react'
import Architecture from "../assets/Architecture.jpg";
import Designer from "../assets/Designer.jpg";
import Photography from "../assets/Photography.jpg";
import SoftwareDeveloper from "../assets/SoftwareDeveloper.jpg";
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import './Jobcategories.css'

class Jobcategories extends Component {




  
  render() {
    return (

      <div style={ {marginTop: '124px'}}>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>

              
                <div class="line"></div>
              </div>
            </div>
          </div>
        
        <div class="row">
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
          <div class="advisor_thumb"><img src={Architecture} alt="" />
          </div>
          <div class="single_advisor_details_info">
            
            <p class="designation">Architecture</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3" >
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
          <div class="advisor_thumb"><img src={Designer} alt="" />
          </div>
          <div class="single_advisor_details_info">
         
            <p class="designation">Designer</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
          <div class="advisor_thumb"><img src={Photography}  alt="" />
          </div>
          <div class="single_advisor_details_info">
        
            <p class="designation">Photography</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
          <div class="advisor_thumb"><img src={SoftwareDeveloper} alt="" />
          </div>
          <div class="single_advisor_details_info">
          
            <p class="designation">Software Development</p>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
          )
        }
        
      }
export default Jobcategories