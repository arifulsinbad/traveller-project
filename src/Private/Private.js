import React, { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Private = ({children}) => {
 const {user, loading} = useContext(AuthContext)
 const location =useLocation()

if(loading){
 <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-14 mr-3 ..." viewBox="0 0 24 24">
    <FaSpinner className='text-2xl'></FaSpinner>
  </svg>
  Processing...
</button>
}
if(!user){
 return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
else{
  return children
}
};

export default Private;