import React from 'react';
import { Link } from 'react-router-dom';

const Places = ({places}) => {
const {name, charge, description, _id, title, img}=places;
 return (
  <div className='mx-auto'>
   <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <a href={img} target='_blank'><img src={img} alt="Shoes" style={{height: '300px'}} /></a>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0, 200)}...</p>
    <p className='font-bold'>Booking Charge : ${charge}</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn btn-primary ">Details</button></Link>
    </div>
  </div>
</div>
  </div>
 );
};

export default Places;