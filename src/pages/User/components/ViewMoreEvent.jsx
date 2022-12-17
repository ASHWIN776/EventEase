import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { db } from "../../../firebase.config";
import "./viewMore.css";

const ViewMore = () => {
    const { id } = useParams();
    const [eventInfo, setEventInfo] = useState(null)
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
                        <p>Total Volunteer Vacancies: <span>100</span></p>
                        <Button variant="primary" size="sm" active className="mx-2 my-2">
                            Apply as a volunteer
                        </Button>
                    </div>
                    <div>
                        <p>Participation Count: <span>100</span></p>
                        <Button variant="success" size="sm" active className="mx-2 my-2">
                            Participate
                        </Button>
                    </div>
                </div>
        </div>
    );
}
 
export default ViewMore;