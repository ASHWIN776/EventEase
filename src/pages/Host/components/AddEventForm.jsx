import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import NavScrollExample from '../../../common/components/Navbar';
import { useNavigate } from "react-router-dom";

export default function AddEventForm() {
    let navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <NavScrollExample/>
    <br/>
           <br/>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            // required
            type="text"
            placeholder="title"
          
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Theme</Form.Label>
          <Form.Control
           // required
            type="text"
            placeholder="theme"
   
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Keywords</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="keyword"
              aria-describedby="inputGroupPrepend"
             // required
            />
            
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Particpants No</Form.Label>
          <Form.Control type="text" placeholder="Particpants No"
           //required 
           />
          
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>ImgUrl</Form.Label>
          <Form.Control type="text" placeholder="ImgUrl" 
          //required 
          />
          
        </Form.Group>
        
      </Row>
      
      <Button type="submit" onClick={() => navigate("/")}>Submit</Button>
    </Form>
  );
}