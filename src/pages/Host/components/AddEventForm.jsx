import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../../../firebase.config';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import {
  collection,
  addDoc,
  Timestamp
} from 'firebase/firestore';

export default function AddEventForm() {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit(async (data) => {
      const event = {
        uid: user.uid,
        createdAt: Timestamp.now(),
        title: data.title,
        theme: [data.theme],
        keywords: [data.keyword],
        participantsNo: data.participantsNo,
        imgUrl: data.imgUrl,
        venue: data.venue
      }
      try {
        const result = await addDoc(collection(db, "events"), event);
        if (result);
        // console.log(role);
        navigate(`/host-dash`);

      } catch (error) {
        console.log(error);
      }
    })}>
      <br />
      <br />
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            // required
            {...register("title")}
            type="text"
            placeholder="title"

          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Theme</Form.Label>
          <Form.Control
            // required
            {...register("theme")}
            type="text"
            placeholder="theme"

          />

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Keywords</Form.Label>
          <InputGroup hasValidation>

            <Form.Control
              {...register("keyword")}
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
          <Form.Control {...register("participantsNo")} type="text" placeholder="Particpants No"
          //required 
          />

        </Form.Group>
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

      <Button type="submit">Submit</Button>
    </Form>
  );
}