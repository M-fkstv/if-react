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
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              'react-datepicker__navigation react-datepicker__navigation--previous'
            }
            style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
              }
            >
              {'<'}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              'react-datepicker__navigation react-datepicker__navigation--next'
            }
            style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
              }
            >
              {'>'}
            </span>
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
    />
  );
};