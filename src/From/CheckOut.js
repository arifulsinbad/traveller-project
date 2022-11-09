import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';

const CheckOut = () => {
 const{user}=useContext(AuthContext)
 return (
  <div className='my-20'>
   <h1>Booking Title : {}</h1>
   <p>Booking Charge : {}</p>
   <form >
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 w-10/12 mx-auto'>
   <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full " />
   <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full " />
   <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full " />
   <input type="text" defaultValue={user?.email} placeholder="Type here" className="input input-bordered input-warning w-full " />
   <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
   <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
   <button className="btn btn-wide">PLACE YOUR Booking</button>

   </div>
   </form>
   <div>
    
   </div>
</div>
 );
};

export default CheckOut;