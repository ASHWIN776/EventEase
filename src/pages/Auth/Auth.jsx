import React from 'react'
import Button from 'react-bootstrap/Button';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from '../../firebase.config';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { useNavigate } from 'react-router';

const Auth = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const authenticate = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // localStorage.setItem("user", user);
            const q = query(collection(db, "user-profile"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                navigate('/signup')
            }
        } catch (error) {

            // Handle Errors here.
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        };
    }
    return (
        <div>
            <Button onClick={authenticate}>Continue with Google</Button>
        </div>
    )
}

export default Auth