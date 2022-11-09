import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
 const detail = useLoaderData()
 const {name, charge, description, _id, title, img}= detail;
 return (
  <div>
   <div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{name}</h1>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className="mb-5">{description}</p>
      <p className='text-xl font-bold mb-4'>Booking Charge : ${charge}</p>
      <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Booking Now</button></Link>
    </div>
  </div>
</div>
  </div>
 );
};

export default Details;