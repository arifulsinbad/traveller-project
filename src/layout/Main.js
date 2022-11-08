import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Headers from '../shared/Headers';

const Main = () => {
 return (
  <div>
   <Headers></Headers>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default Main;