import React, { Component } from 'react';
import './main.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import freeL from "../assets/freeL.jpg";
import mainImage from "../assets/HOMEPAGE.jpg";

class Main extends Component {
  
  render() {
    return (
      <div className="mainDiv">
        <img className="mainImage" src={mainImage} alt="" />


        <Button
          className=" button1 "
          style={{ backgroundColor: '#ffc107bf' }}
          href=""
          onClick={e => e.preventDefault()}
        // size="lg"
        >
          Join Us
        </Button>
        {/* <Container>
              <Card className="">
       
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="8">
                      
                          <img
                            alt="..."
                            className="cardImage"
                           src={freeL}
                          />
                     
                     
                    </Col>
                 
                      <div className=" py-5 " >
                        <Button
                         className=" button1 "

                          href=""
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                       Login as Member
                        </Button>
                       
                        <Button
              className=" button2 "
                          href=""
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                Log in as   User
                        </Button>
                      </div>
            
                 
                  </Row>
            
                  <div className=" py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                         
                   THIS IS OUR MAIN PAGE 
                       
                           </p>
                     
                      </Col>
                    </Row>
                  </div>
           
              </Card>
            </Container> */}

      </div>



    )
  }
}

export default Main
