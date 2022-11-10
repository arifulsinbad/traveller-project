import { data } from 'autoprefixer';
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const CheckOut = () => {
 const{user}=useContext(AuthContext)
 const details = useLoaderData()
 const {title, charge, _id, img }=details;


 const handleInfo =(event)=>{
   event.preventDefault()
   const from =event.target;
   const name =from.name.value;
   const cary =from.cary.value;
   const number = from.number.value;
   const email = user?.email || 'undefind';
   const address =from.address.value;
   const describe = from.describe.value;
   const order = {
      service: _id,
      serviceName: title,
      customer: name,
      img:img,
      charge,
      cary,
      number,
      email,
      address,
      describe
   }
   fetch('http://localhost:5000/orders',{
      method:'POST',
      headers:{
         'content-type' : 'application/json'
      },
      body: JSON.stringify(order)
   })
   .then(res=>res.json())
   .then(data=>{
      console.log(data)
      if(data.acknowledged){
alert('You are a success')
      }
   })
   .catch(error=>console.error(error))
 }
 return (
  <div className='my-20 w-10/12 mx-auto'>
   <h1 className='text-2xl font-bold mb-4'>Booking Title : {title}</h1>
   <p className='font-bold'>Booking Charge : ${charge}</p>
   <form onSubmit={handleInfo} >
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-7'>
   <input name='name' type="text"  placeholder="Enter Your Full Name" className="input input-bordered input-warning w-full " />
   <input name='cary' type="text" placeholder="Cary Catagory" className="input input-bordered input-warning w-full " />
   <input name='number' type="text" placeholder="Phone Number" className="input input-bordered input-warning w-full " />
   <input name='email' type="text" defaultValue={user?.email} placeholder="Type here" className="input input-bordered input-warning w-full " />
   <textarea name='address' className="textarea textarea-info" placeholder="Address"></textarea>
   <textarea name='describe' className="textarea textarea-info" placeholder="Description"></textarea>
   <button className="btn btn-wide">PLACE YOUR Booking</button>

   </div>
   </form>
   <div>
    
   </div>
</div>
 );
};

export default CheckOut;