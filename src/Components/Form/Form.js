import React from "react";

import "./Form.css";

export const Form = () => (
  <form id="form" className="form col-md-12">
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
        // value="2"
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
        // value="0"
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
        // value="1"
        disabled
      />
      <label className="room-label person-label" htmlFor="room">
        Room
      </label>
    </div>
    <button
      type="button"
      className="form__submit input-style col-md-4 col-xs-6"
    >
      Search
    </button>
  </form>
);
