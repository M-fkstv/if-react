import React, { useState } from "react";

import "./Form.css";
// import { HotelsSearch } from "../HotelsSearch";
import { hotels } from "../HotelCard/config";
import { Apps } from "../Icons";

export const Form = ({ onSubmit }) => {
  const [state, setState] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const result = [];

    hotels.filter((item) => {
      if (
        item.name.toLowerCase().includes(searchValue) ||
        item.city.toLowerCase().includes(searchValue) ||
        item.country.toLowerCase().includes(searchValue)
      ) {
        result.push(item);
      }
      return result;
    });
    console.log("res", result);
    setState([...result]);
    onSubmit([...result]);
  }

  let searchValue;
  function handleChange(e) {
    searchValue = e.target.value;
    console.log(searchValue);
  }
  return (
    <form id="form" className="form col-md-12" onSubmit={handleSubmit}>
      {/*<HotelsSearch />*/}
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
          onChange={handleChange}
        />
      </div>
      <div className="form__date col-md-4">
        <label className="form__date--in--label label" htmlFor="date-in">
          Check in
        </label>
        <input
          className="form__date--in input-style"
          type="date"
          id="date-in"
          // value="Tue 15 Sept"
        />
        <div className="form--splitter">
          <span> &mdash; </span>
        </div>
        <label className="form__date-out--label label" htmlFor="date-out">
          Check out
        </label>
        <input
          className="form__date--out input-style"
          type="date"
          id="date-out"
          // value="Sat 19 Sept"
        />
      </div>
      <div className="form__person col-md-4 col-xs-6">
        <input
          className="form__person--search input-style"
          type="text"
          id="adults"
          name="adults"
          value="2"
          disabled
        />
        <label className="adults-label person-label" htmlFor="adults">
          Adults
        </label>
        <div className="form--splitter">
          <span> &mdash; </span>
        </div>

        <input
          className="form__person--search input-style"
          type="text"
          id="children"
          name="children"
          value="0"
          disabled
        />
        <label className="children-label person-label" htmlFor="children">
          Children
        </label>
        <div className="form--splitter">
          <span> &mdash; </span>
        </div>

        <input
          className="form__person--search input-style"
          type="text"
          id="room"
          name="room"
          value="1"
          disabled
        />
        <label className="room-label person-label" htmlFor="room">
          Room
        </label>
      </div>
      {/*<SearchButton />*/}
      <button
        type="submit"
        className="form__submit input-style col-md-4 col-xs-6"
      >
        Search
      </button>
    </form>
  );
};
