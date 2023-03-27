import React, { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollRestoration, useNavigate } from 'react-router-dom';
import { authStatuses } from '../../Constants/authStatuses';
import { PATH } from '../../Constants/paths';

import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { SystemLayuotContext } from '../../Context/SystemLayuotContext';

import { Advantages } from '../Advantages';
import { Footer } from '../Footer';
import { Homes } from '../Homes';
import { Loader } from '../Loader/Loader';
import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';

import './App.css';

const AvailableHotels = lazy(() => import('../AvailableHotels'));

export const App = () => {
  // const { user } = useContext(SystemLayuotContext);
  const [available, setAvailable] = useState(null);
  const availableRef = useRef(null);
  const navigate = useNavigate();
  const loggedOut = useSelector((state) => state.auth.status !== authStatuses.loggedIn);

  useEffect(() => {
    if (loggedOut) {
      navigate('/login');
    }
  }, [ loggedOut,navigate]); //user

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
          {available !== null && <AvailableHotels ref={availableRef} />}
        </Suspense>
      </AvailableHotelsContext.Provider>
      <Advantages />
      <Homes />
      <Footer />
    </>
  );
};
