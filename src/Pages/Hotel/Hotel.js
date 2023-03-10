import React from 'react';

import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';

import './Hotel.css';
import { HotelCard } from '../../Components/HotelCard';

export const Hotel = () => {
  return (
    <>
    <div className="header__wrapper">
      <Header />
      <HotelCard />
    </div>
      <Footer />
    </>
  );
};
