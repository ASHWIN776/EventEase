import { Divider } from '@mui/material'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import AddEventForm from './components/AddEventForm'
import ParticipantForm from './components/VolunteerForm'
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../../firebase.config';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import {
    collection,
    addDoc,
    Timestamp
} from 'firebase/firestore';
import { Button } from 'react-bootstrap';

const AddEventPage = () => {
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit(async (data) => {
                const event = {
                    uid: user.uid,
                    createdAt: Timestamp.now(),
                    title: data.title,
                    theme: data.theme.split(','),
                    keywords: data.keyword.split(','),
                    participantsNo: 0,
                    imgUrl: data.imgUrl,
                    venue: data.venue,
                    volunteerCount: data.volunteerCount
                }
                console.log(event);
                try {
                    const result = await addDoc(collection(db, "events"), event);
                    if (result);
                    // console.log(role);
                    navigate(`/host-dash`);

                } catch (error) {
                    console.log(error);
                }

            })}>
                <AddEventForm register={register} />
                <Divider />
                <ParticipantForm register={register} />
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default AddEventPage