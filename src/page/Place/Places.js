import React from 'react';

const Places = ({places}) => {
const {name, charge, description, _id, title, img}=places;
 return (
  <div>
   <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" style={{height: '300px'}} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0, 200)}...</p>
    <p>Booking Charge : ${charge}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary ">Buy Now</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default Places;