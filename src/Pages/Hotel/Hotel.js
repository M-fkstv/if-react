import React, { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';

import './Hotel.css';
import { Apps } from '../../Components/Icons';
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import { Footer } from '../../Components/Footer';
import axios from 'axios';
import { apiUrl } from '../../Services/Constanst/links';

export const Hotel = () => {
  const [state, setState] = useState('');
  const params = useParams();

  useEffect(() => {
    axios.get(apiUrl).then((resp) =>
      resp.data.map((el) => {
        if (el.id === params.id) {
          setState(el);
        }
      }),
    );
  }, [params.id]);

  return (
    <>
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
