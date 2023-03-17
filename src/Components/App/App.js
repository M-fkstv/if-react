import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes';
import { Advantages } from '../Advantages';
import { Footer } from '../Footer';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header';

import './App.css';

export const App = () => {
  const [available, setAvailable] = useState([]);
  const availableRef = useRef(null);

  useEffect(() => {
    available.length > 0 && availableRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [available.length]);

  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
        <TopSection />
        <Suspense fallback={<Loader />}>  
          {available.length > 0 && <AvailableHotels ref={availableRef} />}
        </Suspense> 
        
        {/* <Outlet /> */}
      </AvailableHotelsContext.Provider>
      <Advantages />
      <Homes />
      <Footer />
      {/* <Hotel /> */}
    </>
  );
};
