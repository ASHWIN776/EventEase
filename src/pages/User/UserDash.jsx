import React from "react"
import Event from "./components/Event"
import eventData from "../../assets/eventData"
import "./userDash.css"
import NavScrollExample from './components/navbar'

export default function UserDash()
{   
    let eventArr = eventData.map(event => <Event event={event} />);
    
    return (
        <>
            <br/>
            <br/>
            <div>
                <h1>Available Events</h1>
                <div className="eventDiv">
                    {eventArr}
                </div>
            </div>
            <div>
                <h1>Past Events Events</h1>
                <div>
                    
                </div>
            </div>
        </>
    );
}
