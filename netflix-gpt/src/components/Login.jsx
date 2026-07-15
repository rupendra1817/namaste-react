import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt='background-image' src='https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg' />
            </div>
            <form className='absolute w-4/12 my-36 mx-auto right-0 left-0 bg-black/80 text-white p-8 flex flex-col'>
                <h1 className='font-bold text-3xl mb-6'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-3 my-2 w-full bg-gray-700 rounded' />}
                <input type='text' placeholder='Email Address' className='p-3 my-2 w-full bg-gray-700 rounded' />
                <input type='password' placeholder='Password' className='p-3 my-2 w-full bg-gray-700 rounded' />
                <button className='p-3 my-6 bg-red-700 w-full rounded font-bold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'} </p>
            </form>
        </div>
    )
}

export default Login