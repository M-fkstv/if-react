import React, { useState, useContext } from "react";
import axios from "axios";

import { SearchButton } from "./SearchButton";
import { HotelsSearch } from "./HotelsSearch";
import { apiUrl } from "../../Services/Constanst/links";
import { AvailableHotelsContext } from "../../Context/AvailableHotelsContext";

import "./Form.css";

export const Form = () => {
  const [formState, setFormState] = useState("");
  const { setAvailable } = useContext(AvailableHotelsContext);
  
  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`${apiUrl}`, {
      params:{
          search: `${formState}`,
      },
    }).then(resp => setAvailable(resp.data));

  }

  function handleChange(e) {
    setFormState(e.target.value);
  }
  
  return (
    <form id="form" className="form col-md-12" onSubmit={handleSubmit}>
      <HotelsSearch onChange={handleChange} value={formState} />
      <div className="form__date col-md-4">
        <label className="form__date--in--label label" htmlFor="date-in">
          Check in
        </label>
        <input
          className="form__date--in input-style"
          type="date"
          id="date-in"
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

      <SearchButton />
    </form>
  );
};
