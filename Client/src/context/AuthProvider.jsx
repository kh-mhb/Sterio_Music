import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('');
    const [loading, seLoading] = useState(true);
    const [isverified, setIsVerified] = useState(false);
    console.log(isverified)
    const gProvider = new GoogleAuthProvider();
    const currentYear = new Date().getFullYear();
    const [userRoll, setUserRoll] = useState('Buyer');
    // console.log(currentYear)
    console.log(userRoll)

    const signup = (email, password) => {
        seLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        seLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const updateInfo = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, gProvider)
    }
    const saveUser = (name, email, role, img) => {
        const user = {
            name,
            email,
            role,
            img
        }
        return fetch('https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

    }
    const handleToSelectCourse = (product) => {
        const { _id, ...productWithoutId } = product;
        const info = { studentemail: user.email, SRLnumber: product._id, ...productWithoutId }
        return fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/selectCourse`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
        })

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setuser(currentUser)
            seLoading(false)

        })
        return () => unsubscribe();
    }, [])

    const authInfo = { c: 1, handleToSelectCourse, signup, seLoading, loading, login, userRoll, setUserRoll, user, logOut, updateInfo, googleSignIn, saveUser, isverified, setIsVerified, currentYear }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;