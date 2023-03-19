import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
// import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes';
import { Advantages } from '../Advantages';
import { Footer } from '../Footer';
import { Loader } from '../Loader/Loader';


import './App.css';


const AvailableHotels = lazy(() => import('../AvailableHotels'));

export const App = () => {
  const [available, setAvailable] = useState(null);
  const availableRef = useRef(null);

  useEffect(() => {
    available && availableRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [available]);

  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
        <TopSection />
        <Suspense fallback={<Loader />}>
          {available !==null  && <AvailableHotels ref={availableRef} />}
        </Suspense>
      </AvailableHotelsContext.Provider>
      <Advantages />
      <Homes />
      <Footer />
      {/* <Hotel /> */}
    </>
  );
};
