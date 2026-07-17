import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (isSignInForm) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message);
                });
        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/8012829?s=48&v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });

                })
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt='background-image' src='https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-4/12 my-36 mx-auto right-0 left-0 bg-black/80 text-white p-8 flex flex-col'>
                <h1 className='font-bold text-3xl mb-6'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm &&
                    <input ref={name} type='text' placeholder='Full Name' className='p-3 my-2 w-full bg-gray-700 rounded' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-3 my-2 w-full bg-gray-700 rounded' />
                <input ref={password} type='password' placeholder='Password' className='p-3 my-2 w-full bg-gray-700 rounded' />
                <p className='text-red-500 font-bold mx-2 text-lg'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-3 my-6 bg-red-700 w-full rounded font-bold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'} </p>
            </form>
        </div>
    )
}

export default Login