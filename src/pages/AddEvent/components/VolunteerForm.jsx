import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ParticipantForm = ({register}) => {
    return (
        <div>
            <Row className="m-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Volunteer Count</Form.Label>
                    <Form.Control
                        // required
                        {...register("volunteerCount")}
                        type="number"
                        placeholder="Volunteer Count"

                    />
                </Form.Group>
            </Row>
        </div>
    )
}

export default ParticipantForm