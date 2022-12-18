import { useState } from "react"
import eventData from "../../assets/eventData"
import "../Sponsor/sponsorDash.css";
import { db, auth } from '../../firebase.config';
import { useCollection } from 'react-firebase-hooks/firestore';
import Event from './components/Event';
import { useAuthState } from "react-firebase-hooks/auth";
import {
    collection,
    query,
    getDocs,
    orderBy,
    limit,
    where,
    onSnapshot,
} from 'firebase/firestore';

export default function HostDash() {
    const [user, loading] = useAuthState(auth);
    const messagesRef = collection(db, 'events');
    const q = query(collection(db, "events"), where("uid", "==", loading ? "" : user.uid));
    const [events] = useCollection(q, { idField: 'id' });
    // const [events, setEvents] = useState([])
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     setEvents(querySnapshot);
    // });

    return (
        <>
            <br />
            <br />
            <div>
                <h1>Available Events</h1>
                <div className="eventDiv">
                    {events && !loading && events.docs?.map(event => {
                        return <Event key={event.id} eId={event.id} event={event.data()} />
                    })}
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

