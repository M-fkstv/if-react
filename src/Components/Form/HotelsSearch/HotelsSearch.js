import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Apps } from '../../Icons';

import './HotelsSearch.css';

export const HotelsSearch = memo(({ onChange, value }) => {
  return (
    <div className="form__city col-md-4">
      <label className="form__city--label label" htmlFor="search">
        Your destination or hotel name
      </label>
      <Apps className="magnifier" id="#magnifier" />
      <input
        className="form__city--search input-style col-xs-6"
        type="text"
        id="search"
        name="search"
        onChange={onChange}
        value={value}
      />
    </div>
  );
});

HotelsSearch.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string,
};
