import React from 'react';
import PropTypes from 'prop-types';

import './Account.css';

export const Account = ({ href }) => (
  <a href={href}>
  <svg className="header__images--account">
    <use href="#account" />
  </svg>
  </a>
);

Account.propTypes = {
  href: PropTypes.string,
};

