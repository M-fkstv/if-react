import React, { useState } from "react";
import { hotels } from "./HotelCard/config";
import { Section } from "./Section";

export function Example() {
  const result = [];

  function handleSubmit(e) {
    e.preventDefault();

    hotels.map((item) => {
      if (
        item.name.toLowerCase().includes(searchValue) ||
        item.city.toLowerCase().includes(searchValue) ||
        item.country.toLowerCase().includes(searchValue)
      ) {
        result.push(item);
      }
      return result;
    });
    console.log(result);
    return result;
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
