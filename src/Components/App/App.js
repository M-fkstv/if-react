import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
// import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes';
import { Advantages } from '../Advantages';

import './App.css';
import { Loader } from '../Loader/Loader';

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
      <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
        <TopSection />
        <Suspense fallback={<Loader />}>
          {available !==null  && <AvailableHotels ref={availableRef} />}
        </Suspense>
      </AvailableHotelsContext.Provider>
      <Advantages />
      <Homes />
    </>
  );
};
