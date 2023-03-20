import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../Constants/paths';
import { Logo, Account, Menu, Night } from '../Icons';
import { LogOut } from '../LogOutModal/LogOut';

import './Header.css';

export const Header = () => {
  // const navigate = useNavigate(); //for button element

  return (
    <header className="header">
      <Link to={PATH.index}>
        <Logo />
      </Link>
      <div className="header__container">
        <div className="header__text">
          <p className="header__text--title">Stays</p>
          <p className="header__text--title">Attractions</p>
        </div>

        <div className="header__images">
          <Menu />
          <Night />
          <Account />
          {/* <Account onClick={() => navigate(PATH.login)}/>  for button element */}
        </div>
      </div>
    </header>
  );
};
