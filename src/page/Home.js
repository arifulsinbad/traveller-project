import React from 'react';
import Carousel from './Carousel';
import Cary from './Cary/Cary';
import Info from './Information/Info';
import Place from './Place/Place';

const Home = () => {
 return (
  <div>
   <Carousel></Carousel>
   <Place></Place>
   <Cary></Cary>
   <Info></Info>
  </div>
 );
};

export default Home;