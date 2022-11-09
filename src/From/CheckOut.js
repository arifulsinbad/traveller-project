import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const CheckOut = () => {
 const{user}=useContext(AuthContext)
 const details = useLoaderData()
 const {title, charge}=details;
 return (
  <div className='my-20 w-10/12 mx-auto'>
   <h1 className='text-2xl font-bold mb-4'>Booking Title : {title}</h1>
   <p className='font-bold'>Booking Charge : ${charge}</p>
   <form >
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-7'>
   <input type="text"  placeholder="Enter Your Full Name" className="input input-bordered input-warning w-full " />
   <input type="text" placeholder="Cary Catagory" className="input input-bordered input-warning w-full " />
   <input type="text" placeholder="Phone Number" className="input input-bordered input-warning w-full " />
   <input type="text" defaultValue={user?.email} placeholder="Type here" className="input input-bordered input-warning w-full " />
   <textarea className="textarea textarea-info" placeholder="Address"></textarea>
   <textarea className="textarea textarea-info" placeholder="Description"></textarea>
   <button className="btn btn-wide">PLACE YOUR Booking</button>

   </div>
   </form>
   <div>
    
   </div>
</div>
 );
};

export default CheckOut;