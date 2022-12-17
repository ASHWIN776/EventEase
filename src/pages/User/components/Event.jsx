import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";

export default function Event(props)
{
    let themeArr = props.event.theme.map(t => (
        <Button variant="light" size="sm" active className="mx-2 my-2">
            {t}
        </Button>
    ));

    let navigate = useNavigate();

    let keywordArr = props.event.keywords.map(k => 
        (
            <Button variant="light" size="sm" active className="mx-2">
                {k}
            </Button>
        )
    )

    return (
        <Card style={{ width: '18rem' }} className="mx-3 my-3">
            {/* <Card.Img variant="top" src={props.event.imgUrl} /> */}
            <Card.Header>
                <Nav className="py-2" variant="tabs" defaultActiveKey="#first">
                    {keywordArr}
                    
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.event.title}</Card.Title>
                <div className="themeContainer">
                    <Card.Text>Theme </Card.Text>
                    {themeArr}
                </div>
                <Card.Text>Venue: <span>{props.event.venue}</span></Card.Text>
                <Button variant="primary" onClick={() => {navigate('/ViewMore',{state: {title: props.event.title,}})}}>View More</Button>
            </Card.Body>
        </Card>
    )
}