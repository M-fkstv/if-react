import React from "react";
import { Logo, Account, Menu, Night } from "../Icons";

import "./Header.css";

export const Header = () => (
  <header className="header">
    <Logo />
    <div className="header__container">
      <div className="header__text">
        <p className="header__text--name">Stays</p>
        <p className="header__text--name">Attractions</p>
      </div>

      <div className="header__images">
        <Menu />
        <Night />
        <Account />
      </div>
    </div>
  </header>
);
