import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

import { Apps } from '../../Components/Icons';
import { Footer } from '../../Components/Footer';
import { Header } from '../../Components/Header';
import { Sprite } from '../../Components/Sprite';

import { apiUrl } from '../../services/Constanst/links';

import './Hotel.css';

export const Hotel = () => {
  const [state, setState] = useState('');
  const params = useParams();

  useEffect(() => {
    axios.get(apiUrl).then((resp) =>
      resp.data.map((item) => item.id === params.id && setState(item),
      // {
      //   if (item.id === params.id) {
      //     setState(item);
      //   }
      // }
      ),
    );
  },[]);

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
