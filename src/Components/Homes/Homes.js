import React, { useState, useEffect } from 'react';

import { SliderButton } from '../SliderButton';
import { Slider } from '../Slider';
import { getHotels } from '../../services/SearchApi/SearchAPI';
import { BaseURL } from '../../services/Constanst/links';

import { useHomesStyles } from './homes.styles';
import { useIndexStyles } from '../../index.styles';
import { useSliderStyles } from '../Slider/slider.styles';

export const Homes = () => {
  const classes = useHomesStyles();
  const [state, setState] = useState([]);
  const hasHomes = localStorage.getItem('homes');
  const indexClasses = useIndexStyles();
  const sliderClasses = useSliderStyles();

  useEffect(() => {
    if (!hasHomes) {
      getHotels(BaseURL).then((result) => {
        setState(result);
        localStorage.setItem('homes', JSON.stringify(result));
      });
    } else {
      setState(JSON.parse(hasHomes));
    }
    //TODO: Error handling, loader
  }, [hasHomes]);

  return (
    <section className={classes.homes}>
      <h2 className={indexClasses.sectionTitle}>Homes guests loves</h2>

      <div className={sliderClasses.wrapper}>
        <SliderButton className={sliderClasses.buttonPrev} id={'prevEl'} />
        <SliderButton className={sliderClasses.buttonNext} id={'nextEl'} />
        <Slider className={classes.examples} data={state} />
      </div>
    </section>
  );
};
