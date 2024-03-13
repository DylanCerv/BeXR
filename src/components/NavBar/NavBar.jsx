import React from 'react'
import './NavBar.css';
import { useState } from 'react';
import logo from '/logo.svg';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar-container`}>
          <div className='navbar-container-head'>
              <img className='logo' src={logo} alt="" />
              <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
              </div>
          </div>
          <ul className={`menu ${isOpen ? 'open' : ''}`}>
              <li><a href="#Nosotros">Nosotros</a></li>
              <li><a href="#Servicios">Servicios</a></li>
              <li><a href="#Proyectos">Proyectos</a></li>
              <li><a href="#Contacto">Contacto</a></li>
          </ul>
      </nav>
      {/* <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
      </ul> */}
    </>
  )
}
