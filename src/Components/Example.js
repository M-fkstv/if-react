// import React from "react";

// export function Example() {
// const [state, setState] = useState();

// function handleSubmit(e) {
//   e.preventDefault();

//   const result = [];

//   hotels.filter((item) => {
//     if (
//       item.name.toLowerCase().includes(searchValue) ||
//       item.city.toLowerCase().includes(searchValue) ||
//       item.country.toLowerCase().includes(searchValue)
//     ) {
//       result.push(item);
//     }
//     return result;
//   });
//   setState([...result]);
//   onSubmit([...result]);
// }

// let searchValue;
// function handleChange(e) {
//   searchValue = e.target.value;
// }

//   return (
//     <form>
//       <input type="text"  />
//       <button type="submit">Отправить</button>
//     </form>
//   );
// }

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
