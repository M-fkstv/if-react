import React from 'react';
import Proptypes from 'prop-types';
import './SliderButton.css';

export const SliderButton = ({ className }) => <div className={className}></div>;

SliderButton.propTypes = {
  className: Proptypes.string,
};
