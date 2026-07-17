import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    // Sign In and Sign out It will execute this block
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Sign In
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
            } else {
                // Sign out
                dispatch(removeUser());
            }
        });

    }, []);


    return (
        <div><RouterProvider router={appRouter} /></div>
    )
}

export default Body