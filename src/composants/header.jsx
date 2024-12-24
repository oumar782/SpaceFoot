<<<<<<< HEAD
import React, { useState } from 'react';
import './Header2.css';
=======

import '../index.css'; 
import LOGO from "/images/logo.png"
>>>>>>> 06701bcf5f9010fd51ad3aebe3492a7ece1d3419

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
<<<<<<< HEAD
    <div className="header-container">
      <div className="header">
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
=======
    <div className="header">
      <img src={LOGO} height={50} alt="" />
      <h1>
        <span className="red">Foot</span>
        <span className="blue">Space</span>
        <span className="yellow">Reserve</span>
      </h1>
      <div className="links">
    <a href="" id="about">A propos</a>
    <a href="" >Réservation</a>
    <a href="">Contact</a>
  </div>
>>>>>>> 06701bcf5f9010fd51ad3aebe3492a7ece1d3419

        <h1>
          <span className="red">Foot</span>
          <span className="blue">Space</span>
          <span className="yellow">Reserve</span>
        </h1>

        <div className={`links ${isMenuActive ? 'active' : ''}`}> 
          <a href="/composants">À propos</a>
          <a href="/reservation">Réservation</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;