import React, { forwardRef, useContext } from 'react';


import { SliderButton } from '../SliderButton';
import { Slider } from '../Slider';
import { HotelCard } from '../HotelCard';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';

import './AvailableHotels.css';

export const AvailableHotels = forwardRef((_,ref) => {
  const { available } = useContext(AvailableHotelsContext);
  if (available.length === 0) {
    return (
      <section className="homes" ref={ref}>
        <h2 className="section-title">
          Available hotels
          <p>Error...</p>
        </h2>
      </section>
    );
  }
  if (available.length < 4) {
    return (
      <section className="homes" ref={ref}>
        <h2 className="section-title">Available hotels</h2>
        <div className="homes__examples">
          {available.map((item) => (
            <HotelCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="homes" ref={ref}>
      <h2 className="section-title">Available hotels</h2>

      <div className="add">
        <SliderButton className={'s-button-next'} />
        <SliderButton className={'s-button-prev'} />
        <Slider className="homes__examples" data={available} />
      </div>
    </section>
  );
});

