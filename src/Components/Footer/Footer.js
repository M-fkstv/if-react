import React from 'react';

import './Footer.css';

export const Footer = () => (
    <div className="footer__wrapper">
    <footer className="footer col-lg-12">
      <svg className="footer__logo col-xs-2">
        <use href="./src/images/sprite.svg#mobile-footer-logo" />
      </svg>
      <div className="footer__description">
        <div className="footer__column col-md-3">
          <ul className="footer__column--text">
            About
            <li className="footer__column--text">How Triphouse works</li>
            <li className="footer__column--text">Careers</li>
            <li className="footer__column--text">Privacy</li>
            <li className="footer__column--text">Terms</li>
          </ul>
        </div>
        <div className="footer__column col-md-3">
          <ul className="footer__column--text">
            Property types
            <li className="footer__column--text">Guest houses</li>
            <li className="footer__column--text">Hotels</li>
            <li className="footer__column--text">Apartments</li>
            <li className="footer__column--text">Villas</li>
            <li className="footer__column--text">Holiday homes</li>
            <li className="footer__column--text">Hostels</li>
          </ul>
        </div>
        <div className="footer__column col-md-3">
          <ul className="footer__column--text">
            Support
            <li className="footer__column--text">Contact Customer Service</li>
            <li className="footer__column--text">FAQ</li>
          </ul>
        </div>
      </div>

      <p className="footer__colontitul">
        © 2020 Triphouse, Inc. All rights reserved
        {/* <button className="stt"></button> */} 
        {/* TODO: ADD ScrollToTop Button */}
      </p>
    </footer>
  </div>
  );
