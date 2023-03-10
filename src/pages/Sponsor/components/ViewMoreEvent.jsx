import { useState, useEffect } from "react"
import NavScrollExample from "./navbar"
import { useLocation, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

const ViewMore = () => {
    const { id } = useParams();
    const [eventInfo, setEventInfo] = useState(null);
    const sponsor = async () => {
        const eventsRef = doc(db, "events", id);

        await updateDoc(eventsRef, {
            sponsorCount: parseInt(eventInfo?.sponsorCount) + 1,

        });
        window.location.reload();
    }
    useEffect(() => {
        const getEvent = async () => {
            const docRef = doc(db, "events", id);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            if (docSnap.exists())
                setEventInfo(docSnap.data());
        }
        getEvent();
    }, [])


    return (
        <div>
            <h1>{eventInfo?.title}</h1>
            <div>
                {eventInfo && eventInfo.theme.map((t, i) => (
                    <Button key={i} variant="light" size="sm" active className="mx-2 my-2">
                        {t}
                    </Button>
                ))}
            </div>
            <p>
                {eventInfo?.content}
            </p>
            <div className="eventOperationDiv">
                <p>Already Sponsored Companies Count: <span>{eventInfo?.sponsorCount}</span></p>
                <Button onClick={sponsor} variant="success" size="sm" active className="mx-2 my-2">
                    Sponsor the Event
                </Button>
            </div>
        </div>
    );
}

export default ViewMore;