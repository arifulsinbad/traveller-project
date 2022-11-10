import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext()
const auth =getAuth(app)


const AuthProvider = ({children}) => {
 const [user, setUser]=useState(null)
 const [loading, setLoading]=useState(true)

const logout = ()=>{
 localStorage.removeItem('token')
 return signOut(auth)
}
 const google = (provider)=>{
  setLoading(true)
  return signInWithPopup(auth, provider)
 }
 const signUp = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
 }
const login = (email, password)=>{
 setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, currentUser =>{
  console.log(currentUser)
  setUser(currentUser)
  setLoading(false)
 })
 return ()=>unSubscribe()
},[])




 const authInfo ={user,
 loading,
 signUp,
 login,
 google,
 logout
 }

 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;