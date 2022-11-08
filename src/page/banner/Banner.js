import React from 'react';
import './banner.css'
const Banner = ({banner}) => {
 console.log(banner)
 return (
 
  <div id={`slide${banner.id}`} className="carousel-item relative w-full">
   <div className='img-gradian'>
   <img src={banner.img} alt='' style={{height: '300px'}} className="w-full" />
   </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={`#slide${banner.prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${banner.next}`} className="btn btn-circle">❯</a>
    </div>
  </div>
 );
};

export default Banner;