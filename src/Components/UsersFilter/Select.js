// const options = new Array(17)
//   .fill(0)
//   .map((item, index) => `<option>${index} years old</option>`)
//   .join('');
// import './UsersFilter.css';
import PropTypes from 'prop-types';

export const SelectWrapper = ({ select }) => {
  return select.map((item, index) => {
    return (item = (
      <select className="children__active" id={index} key={index}>
        <option>0 years old</option>
        <option>1 years old</option>
        <option>2 years old</option>
        <option>3 years old</option>
        <option>4 years old</option>
        <option>5 years old</option>
        <option>6 years old</option>
        <option>7 years old</option>
        <option>8 years old</option>
        <option>9 years old</option>
        <option>10 years old</option>
        <option>11 years old</option>
        <option>13 years old</option>
        <option>14 years old</option>
        <option>15 years old</option>
        <option>16 years old</option>
        <option>17 years old</option>
      </select>
    ));
  });
};

SelectWrapper.propTypes = {
  select: PropTypes.array,
};
