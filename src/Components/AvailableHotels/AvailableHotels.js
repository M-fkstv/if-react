import React, { forwardRef } from 'react';

import { HotelCard } from '../HotelCard';
import { Slider } from '../Slider';
import { SliderButton } from '../SliderButton';

import { useSelector } from 'react-redux';
import './AvailableHotels.css';

export const AvailableHotels = forwardRef((_, ref) => {
  const available = useSelector((state) => state.availableHotels);

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
            <HotelCard {...item} key={item.id} />
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="homes" ref={ref}>
      <h2 className="section-title">Available hotels</h2>

      <div className="slider-wrapper">
        <SliderButton className={'s-button-next'} />
        <SliderButton className={'s-button-prev'} />
        <Slider className="homes__examples" data={available} />
      </div>
    </section>
  );
});
