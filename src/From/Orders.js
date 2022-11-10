import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import Order from './Order';

const Orders = () => {
  const {user, logout}=useContext(AuthContext)
 
  const [order, setOrder]=useState([])
  
  // console.log(order)

  useEffect(()=>{
    fetch(`https://y-chi-amber.vercel.app/orders?email=${user?.email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res=>{
      if(res.status === 401 || res.status === 403){
        return logout()
            }
     return res.json()})
    .then(data=>{
      setOrder(data)
    })
  }, [user?.email, logout])

const handleDelete =(id)=>{
  const procced = window.confirm('Are YOU Sure You want to delete')
  if(procced){
    fetch(`https://y-chi-amber.vercel.app/orders/${id}`,{
      method:'DELETE',
      headers:{
        authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount > 0){
alert('Delete Success')
const remaining = order.filter(d => d._id !== id)
setOrder(remaining)
      }
    })
    .catch(error=>console.log(error))
  }
}

 return (
  <div>
   <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name/Address</th>
        <th>Travel/Service</th>
        <th>Booking Charge</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
     {
      order.map(order=><Order key={order._id} order={order} handleDelete={handleDelete}></Order>)
     }
     </tbody>
  </table>
</div>
  </div>
 );
};

export default Orders;