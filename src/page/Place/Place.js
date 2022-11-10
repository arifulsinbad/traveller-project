import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Places from './Places';

const Place = () => {
 const [place, setPlace] = useState([])
 const [count, setCount] =useState(0)
 const [page, setPage] =useState(0)
 const [size, setSize] =useState(3)
 console.log(size)
 useEffect(()=>{
const url =`https://y-chi-amber.vercel.app/services?page=${page}&size=${size}`
fetch(url)
.then(res=>res.json())
.then(data=>{
 // console.log(data)
 setPlace(data.result)
 setCount(data.count)
})

 },[page, size])
 
 return (
  <div>
  <div>
  <h1 className='text-5xl font-bold mt-16 text-center'>Traveling Place</h1>
  <p className='w-1/2 mx-auto mt-5 text-center'>Islamic tourism is not only related to religious values but also must be in line with every way of life that is not contrary to Islam. Not many companies and agencies organize halal tourism packages because they think it is not a necessity and a profit.</p>
  </div>
  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-14 mb-10'>
   {
    place.map(places=><Places key={places._id} places={places}></Places>)
   }
  </div>
<div className='text-center'>
{size === count ? <button className='btn btn-ghost' onClick={()=> setSize(count)} >See All</button> : 
 <button className='btn btn-info' onClick={()=> setSize(count)} >See All</button>

 }
</div>
   
   
  </div>
 );
};

export default Place;