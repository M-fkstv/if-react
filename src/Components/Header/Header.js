import React from "react";
import { Logo, Account, Menu, Night } from "../Icons";

import "./Header.css";

export const Header = () => (
  <header className="header">
    <Logo />
    <div className="header__container">
      <div className="header__text">
        <p className="header__text--title">Stays</p>
        <p className="header__text--title">Attractions</p>
      </div>

      <div className="header__images">
        <Menu />
        <Night />
        <Account />
      </div>
    </div>
  </header>
);
