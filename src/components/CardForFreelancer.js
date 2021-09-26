import React, { Component } from 'react';
import Architecture from "../assets/Architecture.jpg";
import Designer from "../assets/Designer.jpg";
import Photography from "../assets/Photography.jpg";
import softwareDevelopment from "../assets/Software Development.PNG";
import { Card, Button , Row,Col} from 'react-bootstrap';

 class CardForFreelancer extends Component {
    // const {
    //     databook,
    //     handleDelete,
    //     updatetitle,
    //     updateDescription,
    //     updateStatus,
    //     UpdateForm,
    // } = this.props

    render() {
        return (
          
            <>
            <h1 style={{ color: 'white' }}>Job Offers By Category</h1>
         <Row >   
           <Col>
              
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Architecture} style={{ width: '18rem', height:'16rem' }} />
              <Card.Body>

                <Button variant="primary" style={{ width: '18rem' }}>Architecture</Button>
              </Card.Body>
            </Card>
            </Col>
          <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Designer} style={{ width: '18rem', height:'16rem' }} />
                <Card.Body>

                  <Button variant="primary" style={{ width: '18rem'  }}>Design</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Photography} style={{ width: '18rem', height:'16rem' }} />
                <Card.Body>

                  <Button variant="primary" style={{ width: '18rem' }}>Photography</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={softwareDevelopment} style={{ width: '18rem', height:'16rem' }} />
                <Card.Body>

                  <Button variant="primary" style={{ width: '18rem' }} >Software Development</Button>
                </Card.Body>
              </Card>
            
            </Col>
              </Row>
            </>

        )
    }
}

export default CardForFreelancer;


// <div>
// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={Architecture}  style={{ width: '18rem' }} />
// <Card.Body>

// <Button variant="primary"  style={{ width: '18rem' }} onClick={() => ()}>Go somewhere</Button>
// </Card.Body>
// </Card>
// </div>