import React, { useEffect, useRef, useState } from 'react';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes';

import './App.css';

export const App = () => {
  const [available, setAvailable] = useState([]);
  const availableRef = useRef(null);
  

  useEffect(()=>{
    available.length > 0 && availableRef.current.scrollIntoView({ behavior: 'smooth' });
  },[available]);

  return (
    <>
      <Sprite />
      <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
        <TopSection />
        {available.length > 0 && <AvailableHotels ref={availableRef}/>}
      </AvailableHotelsContext.Provider>
      <Homes />
    </>
  );
};
