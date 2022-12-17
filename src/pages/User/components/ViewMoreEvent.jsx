import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { db } from "../../../firebase.config";

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
        <div>
            
            <center>
            <h1>{eventInfo?.title}</h1>
                <div>
                    {eventInfo && eventInfo.theme.map((t, i) => (
                               <Button variant="light" size="sm" active className="mx-2 my-2">
                               {t}
                           </Button>
                    ))}
                </div>
                <p>
                {eventInfo?.content}
                </p>
                <div>
                    <div>
                    <Button variant="light" size="sm" active className="mx-2 my-2">
                        Apply as a volunteer
                        </Button>
                    </div>
                    <div>
                    <Button variant="light" size="sm" active className="mx-2 my-2">
                        Participate
                    </Button>
                    </div>
                </div>
            </center>
        </div>
    );
}
 
export default ViewMore;