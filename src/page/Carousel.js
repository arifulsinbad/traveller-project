import React from 'react';
import banner1 from '../page/images/banner1.webp'
import banner2 from '../page/images/banner2.jpg'
import banner3 from '../page/images/banner3.jpg'

import Banner from './banner/Banner';

const Carousel = () => {
 const bannerItems =[
  {
img: banner1,
prev: 3,
id: 1,
next: 2
  },
  {
img: banner2,
prev: 1,
id: 2,
next: 3
  },
  {
img: banner3,
prev: 2,
id: 3,
next: 1
  }
 ]
 return (
  <div className="carousel mx-auto rounded-t-xl "style={{width: '35%', height: '300px'}}>
 {
bannerItems.map(banner=><Banner key={banner.id} banner={banner}></Banner>)
 }

</div>
 );
};

export default Carousel;