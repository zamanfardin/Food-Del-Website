import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Store } from '../../context/store';

const Navbar = ({ setLog }) => {
  const [menu, setMenu] = useState('Home');

const {getTotalcartAmoount} = useContext(Store);

  return (
    <div className="Navbar">
      {/* Fixed: Use <Link> instead of <link> */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          Menu
        </a>
        <a href="#app-id" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>
          Mobile App
        </a>
        <a href="#footer" onClick={() => setMenu('Contact Us')} className={menu === 'Contact Us' ? 'active' : ''}>
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" className="search" />
        <div className="navbar-search">
          {/* Fixed: Use <Link> instead of <link> */}
          <Link to="/Cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalcartAmoount()==0?"":'dot'}></div>
        </div>
        <button onClick={() => setLog(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
