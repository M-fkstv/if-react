import React from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';


import { Apps } from '../../Components/Icons';
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { Sprite } from '../../Components/Sprite';

import './Hotel.css';

export const Hotel = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <div className="header__wrapper">
        <Header />
        <div className="homes__examples__icons ">
          <img
            className="homes__examples__icon "
            id={state.id}
            src={state.imageUrl}
            alt={state.name}
          />

          <div className="homes__description">
            <p className="homes__description--text">{state.name}</p>
            <p className="homes__description--text">
              {state.city}, {state.country}
            </p>
          </div>
        </div>

        <div className="apps">
          <Apps className="apps__google" id="#google" />
          <Apps className="apps__apple" id="#apple" />
        </div>
      </div>
      <Footer />
    </>
  );
};
