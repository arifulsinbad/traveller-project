import React from 'react';

const Cary = () => {
 return (
 <div className=' mt-10 mb-10'>
  <h1 className='text-xl text-center font-bold' >Select Traveling</h1>
<div className='flex gap-9 justify-center mt-10 mb-10 flex-wrap'>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://www.iata.org/contentassets/6609a4c194c64d8d88f78064f76f9d78/web_view-of-plane-through-vegetation_credit_istock-1347150475.jpg?mode=crop&scale=both&v=20220906080035" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Air</h2>
    <p>Air Lines Services</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Cary Now</button>
    </div>
  </div>
</div>
   <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://www.carnival.com/-/media/images/ships/fd/carnival-freedom-mobile.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Ship</h2>
    <p>Ship Lines Services</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Cary Now</button>
    </div>
  </div>
</div>
   <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2izmmQGC6WtnEwsouWSRKWvsJy-V3vg_cIHpiur51v8BsduXdCXPamoeWNSO-ZKpVLm4&usqp=CAU" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Car</h2>
    <p>Car Lines Services</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Cary Now</button>
    </div>
  </div>
</div>
</div>
 </div>
 );
};

export default Cary;