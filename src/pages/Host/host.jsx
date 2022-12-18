import { useEffect,useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import VolunteerInfo from './components/VolunteerInfo';
import ParticipantInfo from './components/ParticipantInfo';
import SponsorInfo from './components/SponsorInfo';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
const Host = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null)
    useEffect(() => {
        const getEvent = async () => {
            const docRef = doc(db, "events", id);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            if (docSnap.exists())
                setEvent(docSnap.data());
        }
        getEvent();
    }, [])
    return (
        <div>
            <Tabs
                defaultActiveKey="event-info"
                id="uncontrolled-tab-example"
                className="m-3"
            >
                <Tab eventKey="event-info" title="Event Info">
                    {/* <AddEventForm /> */}
                </Tab>
                <Tab eventKey="volunteer-info" title="Volunteer Info">
                    <VolunteerInfo />
                </Tab>
                <Tab eventKey="participant-info" title="Participants Info">
                    <ParticipantInfo />
                </Tab>
                <Tab eventKey="sponsor-info" title="Sponsor Info">
                    <SponsorInfo />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Host