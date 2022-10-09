import React, { useState } from 'react'
import "../styles/Navbar.scss";
import logo from '../assets/logo.svg'
import burger from '../assets/menu.svg'
import close from '../assets/close.svg'

const Navbar = () => {

  const [menuOpened, setMenuOpened] = useState(true)

  const dropdownStyle = {
    display: menuOpened ? 'flex' : 'flex',
    top: menuOpened ? '48px' : '260px',
    transform: 'translateY(-212px)',
    transition: '1s',
  }

  return (
    <div className="container navbar">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar__links">
        <a href="#">Chrome Extension</a>
        <a href="#">Price Comparison</a>
        <a href="#">Blog</a>
      </div>
      <div style={dropdownStyle} className="navbar__links-dropdown">
        <a href="#">Chrome Extension</a>
        <a href="#">Price Comparison</a>
        <a href="#">Blog</a>
      </div>
      <div onClick={() => setMenuOpened(!menuOpened)} className="burger__menu">
        {menuOpened ? <img src={burger} alt="" /> : <img src={close} alt="" />}
      </div>
    </div>
  );
}

export default Navbar