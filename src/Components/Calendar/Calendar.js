// import React, { useState } from 'react';
// import { hotels } from './HotelCard/config';

// export function Example({ onSubmit }) {
//   const [state, setState] = useState();

//   function handleSubmit(e) {
//     e.preventDefault();

//     const result = [];

//     hotels.filter((item) => {
//       if (
//         item.name.toLowerCase().includes(searchValue) ||
//         item.city.toLowerCase().includes(searchValue) ||
//         item.country.toLowerCase().includes(searchValue)
//       ) {
//         result.push(item);
//       }
//       return result;
//     });
//     setState([...result]);
//     onSubmit([...result]);
//   }

//   let searchValue;
//   function handleChange(e) {
//     searchValue = e.target.value;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" onChange={handleChange} />
//       <button type="submit">Отправить</button>
//     </form>
//   );
// }
import React, { memo, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import './Calendar.css';

export const Calendar = memo(() => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      placeholderText="Click to select a date"
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      monthsShown={2}
      dateFormat="d MMMM yyyy"
    />
  );
});
