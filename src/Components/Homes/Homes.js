import React, { useState, useEffect } from 'react';

import { SliderButton } from '../SliderButton';
import { Slider } from '../Slider';
import { getHotels } from '../../services/SearchApi/SearchAPI';
import { BaseURL } from '../../services/Constanst/links';

import './Homes.css';

export const Homes = () => {
  const [state, setState] = useState([]);
  const hasHomes = localStorage.getItem('homes');

  useEffect(() => {
   if(!hasHomes){ 
    getHotels(BaseURL).then((result) => {
      setState(result);
      localStorage.setItem('homes', JSON.stringify(result));
    });
  }else{
    setState(JSON.parse(hasHomes));
  };
    //TODO: Error handling, loader
  }, [hasHomes]);

  return (
    <section className="homes">
      <h2 className="section-title">Homes guests loves</h2>

      <div className="slider-wrapper">
        <SliderButton className={'s-button-next'} />
        <SliderButton className={'s-button-prev'} />
        <Slider className="homes__examples" data={state} />
      </div>
    </section>
  );
};
