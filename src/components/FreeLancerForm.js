import React, { Component } from 'react'
import { Form , Button , Row , Col, Modal} from 'react-bootstrap';

export class FreeLancerForm extends Component {

 

        
    render() {
        const {
            Name,
            Email,
            Phone,
             Location, 
             Education, 
             Experience, 
             JobDescription,
             Languages,
             PricePerHour,
            Skills,
                   
            } = this.props
        return (
            <div>
                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>FreeLancer SetUp Your Account</Modal.Title>
  </Modal.Header>

  <Modal.Body>
               
               <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Email" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Phone" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLocation">
      <Form.Label>Location</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Location" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridEducation">
    <Form.Label>Education</Form.Label>
    <Form.Control placeholder="Enter your Education" />
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formGridExperience">
    <Form.Label> Experience</Form.Label>
    <Form.Control placeholder=" Experience" />
  </Form.Group> */}

  <Form.Group className="mb-3" controlId="formGridJobDescription">
    <Form.Label>Job Description</Form.Label>
    <Form.Control placeholder=" Job Description" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridLanguages">
      <Form.Label>  Languages</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGrid Experience">
      <Form.Label> Experience</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Entry Level</option>
        <option>Intermediate</option>
        <option> Expert</option>

      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPricePerHour">
      <Form.Label>Price Per/Hour</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

 <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Profile Picture</Form.Label>
    <Form.Control type="file" />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I am not Robot" />
  </Form.Group>

 

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
</Modal.Body>

<Modal.Footer>
  <Button variant="secondary">Close</Button>
  <Button variant="primary">Save changes</Button>
</Modal.Footer>
</Modal.Dialog>
{/* </Modal.Body>
                  
                  </Modal> */}
            </div>
        )
    }
}

export default FreeLancerForm;
