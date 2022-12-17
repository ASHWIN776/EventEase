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
        <div classname="my-3">
            <form onSubmit={handleSubmit(async (data) => {
                const profile = {
                    uuid: user.uid,
                    ...data
                }
                console.log(profile);
                try {
                    const result = await addDoc(collection(db, "profile"), profile);
                    if (result);
                    // console.log(role);
                        navigate(`/${role}-dash`);

                } catch (error) {
                    console.log(error);
                }

            })}>

                {/* host */}
                {role === 'host' && 
                <div>
                    <label htmlFor="">Organization</label><br />
                    <input {...register("organization")} type="text"  />
                </div>
                }
                {/* user */}
                {role === 'user' &&
                    <>
                        <div classname="my-3">
                            <label htmlFor="">Department</label><br />
                            <input id="dept" {...register("department")} type="text"/>
                        </div>
                        <div classname="my-3">
                            <label htmlFor="">Semester</label><br />
                            <input {...register("semester")} type="text" />
                        </div>
                    </>
                }
                {/* sponsor */}
                {role === 'sponsor' &&
                    <>
                        <div classname="my-3">
                            <label htmlFor="">Company Name</label><br />
                            <input {...register("companyName")} type="text"/>
                        </div>
                        <div classname="my-3">
                            <label htmlFor="">Company Description</label><br />
                            <textarea {...register("companyDescp")} rows="4" cols="50"></textarea>
                        </div>
                    </>
                }
                {/* host and sponsor */}
                {(role === 'sponsor' || role === 'host') &&
                    <div classname="my-3">
                        <label htmlFor="">Contact</label><br />
                        <input {...register("contact")} type="text"/>
                    </div>
                }
                <Button type="submit">SignUp</Button>
            </form>
        </div>
    );
}

export default SignUp;