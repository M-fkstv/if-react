import React from "react";

import "./HotelsSearch.css";

export const HotelsSearch = () => {
  let searchValue;
  function handleChange(e) {
    searchValue = e.target.value;
  }

  return (
    <div className="form__city col-md-4">
      <label className="form__city--label label" htmlFor="search">
        Your destination or hotel name
      </label>
      <svg className="magnifier">
        <use href="./src./images/sprite.svg#magnifier" />
      </svg>
      <input
        className="form__city--search input-style col-xs-6"
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
      />
    </div>
  );
};
