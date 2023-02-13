import React, { useState } from 'react';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes';
import { Example } from '../Example';

import './App.css';

export const App = () => {
  const [available, setAvailable] = useState([]);
  return (
    <>
      <Sprite />
      <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
        <TopSection />
        {available.length > 0 && <AvailableHotels />}
        

      </AvailableHotelsContext.Provider>
      <Homes />
      <Example />
    </>
  );
};