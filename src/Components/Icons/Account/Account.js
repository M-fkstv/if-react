import React from 'react';


import './Account.css';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../Constants/paths';

export const Account = () => {
  
  return (
 
    <NavLink to={PATH.login} className={({isActive}) => isActive ? 'header__images--account--login' : 'header__images--account'}>
      <svg>
        <use href="#account" />
      </svg>
    </NavLink>
  );
};

