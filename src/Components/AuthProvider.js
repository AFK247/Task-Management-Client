import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from './firebase';


export const AuthContext = createContext();
const auth = getAuth(app);

//Authentication
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const googleLogin = (google) => {
        setLoading(true);
        return signInWithPopup(auth, google);
    }

    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const cred_info = {user,setLoading,loading,logOut,register,login,googleLogin,userProfileUpdate};
    return (
        <AuthContext.Provider value={cred_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;