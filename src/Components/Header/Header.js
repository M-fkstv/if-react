import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Account, Logo, Menu, Night } from '../Icons';
import { SignOut } from '../SignOutModal/SignOut';

import { PATH } from '../../Constants/paths';

import './Header.css';

export const Header = () => {
  // const navigate = useNavigate(); //for button element
  const signOutRef = useRef(null);

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
          <Account onClick={() => signOutRef.current.open()} />
          {/* <Account onClick={() => navigate(PATH.login)}/>  for button element */}
        </div>
      </div>
      <SignOut ref={signOutRef} />
    </header>
  );
};
