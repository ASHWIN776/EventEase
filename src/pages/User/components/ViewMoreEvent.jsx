import { arrayUnion, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { db, auth } from "../../../firebase.config";
import "./viewMore.css";
import { useAuthState } from 'react-firebase-hooks/auth';
const ViewMore = () => {
    const { id } = useParams();
    const [eventInfo, setEventInfo] = useState(null);
    const [user] = useAuthState(auth);

    const applyVol = async () => {
        const eventsRef = doc(db, "events", id);
        // console.log(auth.currentUser.uid);
        // const q = query(eventsRef, where("volunteerDetails", auth.currentUser.uid));
        // const querySnapshot = await getDocs(q);
        // const [open, setOpen] = useState(true);
        // if (!querySnapshot.empty()) {
        //     alert("You have already registered as a volunteer");
        //     return;
        // }
        await updateDoc(eventsRef, {
            volunteerCount: parseInt(eventInfo?.volunteerCount) - 1,
            // volunteerDetails: arrayUnion(user?.uid)
        });
        window.location.reload();
    }

    const participate = async () => {
        const eventsRef = doc(db, "events", id);
        // console.log(auth.currentUser.uid);
        // const q = query(eventsRef, where("volunteerDetails", auth.currentUser.uid));
        // const querySnapshot = await getDocs(q);
        // const [open, setOpen] = useState(true);
        // if (!querySnapshot.empty()) {
        //     alert("You have already registered as a volunteer");
        //     return;
        // }
        await updateDoc(eventsRef, {
            participantsNo: parseInt(eventInfo?.participantsNo) + 1,
            // volunteerDetails: arrayUnion(user?.uid)
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
        <div className="eventContent">
            <h1>{eventInfo?.title}</h1>
            <div className="my-3">
                {eventInfo && eventInfo.theme.map((t, i) => (
                    <Button variant="light" size="sm" active className="mx-2 my-2">
                        {t}
                    </Button>
                ))}
            </div>
            <p>
                {eventInfo?.content}
            </p>
            <div className="eventOperationDiv">
                <div>
                    <p>Total Volunteer Vacancies: <span>{eventInfo?.volunteerCount ?? 0}</span></p>
                    <Button onClick={applyVol} disabled={!open} variant="primary" size="sm" active className="mx-2 my-2">
                        Apply as a volunteer
                    </Button>
                </div>
                <div>
                    <p>Participation Count: <span>{eventInfo?.participantsNo ?? 0}</span></p>
                    <Button onClick={participate} variant="success" size="sm" active className="mx-2 my-2">
                        Participate
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ViewMore;