import React from 'react';
// import PropTypes from 'prop-types';

import './Account.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PATH } from '../../../Constants/paths';

export const Account = () => {
  const location = useLocation();

  return (
    // <Link to={PATH.login}>
    //   <svg
    //     className={
    //       location.pathname.includes('login')
    //         ? 'header__images--account--login'
    //         : 'header__images--account'
    //     }>
    //     <use href="#account" />
    //   </svg>
    // </Link>

    <NavLink to={PATH.login} className={({isActive}) => isActive ? 'header__images--account--login' : 'header__images--account'}>
      <svg
        // className='header__images--account'
        >
        <use href="#account" />
      </svg>
    </NavLink>
  );
};
// Account.propTypes = {
//   href: PropTypes.string,
// };
