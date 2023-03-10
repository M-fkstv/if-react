import React, { Suspense, useEffect, useRef, useState } from 'react';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes';
import { Advantages } from '../Advantages';
import { Footer } from '../Footer';

import './App.css';
import { Loader } from '../Loader/Loader';
import { Hotel } from '../../Pages/Hotel/Hotel';

export const App = () => {
  const [available, setAvailable] = useState([]);
  const availableRef = useRef(null);

  useEffect(() => {
    available.length > 0 && availableRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [available.length]);

  return (
    <>
      <Sprite />
      <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
        <TopSection />
        <Suspense fallback={<Loader />}>
          {available.length > 0 && <AvailableHotels ref={availableRef} />}
        </Suspense>
      </AvailableHotelsContext.Provider>
      <Advantages />
      <Homes />
      <Footer />
      <Hotel />
    </>
  );
};
