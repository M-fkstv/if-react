import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollRestoration, useNavigate } from 'react-router-dom';
import { authStatuses } from '../../Constants/authStatuses';
import { PATH } from '../../Constants/paths';

import { Advantages } from '../Advantages';
import { AvailableHotels } from '../AvailableHotels';
import { Footer } from '../Footer';
import { Homes } from '../Homes';
import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';

import { useAvailableHotMutation } from '../../services/getAvailable';

export const App = () => {
  const availableRef = useRef(null);
  const navigate = useNavigate();
  const loggedOut = useSelector((state) => state.auth.status !== authStatuses.loggedIn);
  const availableHotels = useSelector((state) => state.availableHotels);
  const [getAvailableHotels, { data }] = useAvailableHotMutation();

  useEffect(() => {
    console.log(data);
  }, []);

  const available = Object.values(availableHotels.mutations)[0]?.data;
  console.log(availableHotels);

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
    availableHotels && availableRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [loggedOut, navigate, availableHotels]);

  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <TopSection />
      {available && <AvailableHotels ref={availableRef} />}
      <Advantages />
      <Homes />
      <Footer />
    </>
  );
};
