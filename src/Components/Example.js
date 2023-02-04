import React, { useState } from "react";
import { hotels } from "./HotelCard/config";

export function Example({ onSubmit }) {
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
    setState([...result]);
    onSubmit([...result]);
  }

  let searchValue;
  function handleChange(e) {
    searchValue = e.target.value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
}
