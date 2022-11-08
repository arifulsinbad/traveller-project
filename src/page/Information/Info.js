import React from 'react';

const Info = () => {
 return (
  <div className="hero min-h-screen mx-auto h-1/2" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5z3WzBUfUl0grIcKxuNNmqXYS32PKQFpFx75dbRI9FoC8mvg0DWYvAZxy3kFz2CneJ8&usqp=CAU")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">How to Have a Good Flight</h1>
      <p className="mb-5">On even the calmest days in the air, flying can be stressful. There are the prospects of cancellations and delays, long lines at security and cramped seats — not to mention the disorienting jet lag you may suffer from when you finally arrive. But there are ways to make it a better experience for you and your family. The following tips will help you get through the airport without raising your blood pressure, have a pleasant experience in the air and arrive refreshed and ready to hit the ground running at your destination.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 );
};

export default Info;