import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { db, auth } from '../../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import {
    collection,
    addDoc
} from 'firebase/firestore';

function SignUp({ role }) {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={handleSubmit(async (data) => {
                const profile = {
                    uuid: user.uid,
                    ...data
                }
                console.log(profile);
                try {
                    const result = await addDoc(collection(db, "profile"), profile);
                    if (result);
                    console.log(role);
                        // navigate(`/${role}-dash`);

                } catch (error) {
                    console.log(error);
                }

            })}>

                {/* host */}
                {role === 'host' && <input {...register("organization")} type="text" placeholder="Enter your Organization" />}
                {/* user */}
                {role === 'user' &&
                    <>
                        <input {...register("department")} type="text" placeholder="Enter your dept" />
                        <input {...register("semester")} type="text" placeholder="Enter your sem" />
                    </>
                }
                {/* sponsor */}
                {role === 'sponsor' &&
                    <>
                        <input {...register("companyName")} type="text" placeholder="Enter your company name" />
                        <textarea {...register("companyDescp")} placeholder="Enter your company description"></textarea>
                    </>
                }
                {/* host and sponsor */}
                {(role === 'sponsor' || role === 'host') &&
                    <input {...register("contact")} type="text" placeholder="Enter your Contact" />
                }
                <Button type="submit">SignUp</Button>
            </form>
        </div>
    );
}

export default SignUp;