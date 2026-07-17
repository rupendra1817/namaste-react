import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });

    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between'>
            <img alt='logo' className='w-44' src='https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg' />

            {user &&
                <div className='flex'>
                    <img alt='userImage' src={user?.photoURL} className='w-20 h-12 my-2'></img>
                    <button onClick={handleSignOut} className='bg-red-500 w-20 h-8 m-2 text-white cursor-pointer'>Sign Out</button>
                </div>}
        </div>
    )
}

export default Header