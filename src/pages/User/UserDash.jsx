import React from "react"
import Event from "./components/Event"
import eventData from "../../assets/eventData"
import "./userDash.css"
import NavScrollExample from './components/navbar'
import { db } from '../../firebase.config';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
    collection,
    query,
    getDocs,
    orderBy,
    limit,
} from 'firebase/firestore';

export default function UserDash()
{   
    const messagesRef = collection(db, 'events');
    const q = query(messagesRef, orderBy("createdAt"));
    const [events] = useCollection(q, { idField: 'id' });
    let eventArr = eventData.map(event => <Event event={event} />);
    
    return (
        <>
            <br/>
            <br/>
            <div>
                <h1>Available Events</h1>
                <div className="eventDiv">
                    {events && events.docs?.map(event => <Event key={event.id} eId={event.id} event={event.data()} />)}
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
