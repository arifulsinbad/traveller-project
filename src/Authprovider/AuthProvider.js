import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
 const [loading, setLoading]=useState(true)
 const [user, setUser]=useState(null)
 useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser=>{
   console.log(currentUser)
   setUser(currentUser)
   setLoading(false)
  })
  return ()=>unSubscribe()
 }, [])
 const authInfo ={user,
 loading,
 }
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;