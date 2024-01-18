import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import axios from 'axios';

export const AuthContext =createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true)
    const googleProvider = new GoogleAuthProvider();



    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    // for update profile
    const updateUserProfile = ((name,photo) =>{
   
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })
    })
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser)
           console.log('currentUser',currentUser)
        //    setLoading(false)
         if(currentUser){
           axios.post('https://education-server-ten.vercel.app/jwt',{
               email:currentUser.email
           })
           .then(data=>{
            //    console.log(data.data.token)
               localStorage.setItem("access token",data.data.token)
               
           })
         }else{
           localStorage.removeItem('access token')
         }
         setLoading(false)
          
        })
        return()=>{
                return unsubscribe()
        }
   },[])

    const authInfo ={
          user,
          loading,
          googleSignIn,
          createUser,
          signIn,
          logOut,
          updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;