import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function AddEventForm({ register }) {
  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            // required
            {...register("title")}
            type="text"
            placeholder="Title"

          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Theme</Form.Label>
          <Form.Control
            // required
            {...register("theme")}
            type="text"
            placeholder="theme1, theme2, theme3"

          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Keywords</Form.Label>


          <Form.Control
            {...register("keyword")}
            type="text"
            placeholder="keyword1, keyword2, keyword3"
            aria-describedby="inputGroupPrepend"
          // required
          />


        </Form.Group>
      </Row>
      <Row className="mb-3">
        {/* <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Particpants No</Form.Label>
          <Form.Control {...register("participantsNo")} type="text" placeholder="Particpants No"
          //required 
          />

        </Form.Group> */}
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>ImgUrl</Form.Label>
          <Form.Control {...register("imgUrl")} type="text" placeholder="ImgUrl"
          //required 
          />

        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Venue</Form.Label>
          <Form.Control {...register("venue")} type="text" placeholder="Venue"
          //required 
          />

        </Form.Group>

      </Row>

    </>
  );
}