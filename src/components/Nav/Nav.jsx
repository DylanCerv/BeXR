import React, { useEffect } from 'react'
import './Nav.css'
import { useState } from 'react';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('');

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
          const sections = document.querySelectorAll('section'); // Cambia 'section' por el selector de tus secciones
          let scrollPosition = window.scrollY;

          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;

              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                  
                  if (section.id === 'Home') {
                    setCurrentSection('White');
                  }else {
                    setCurrentSection(section.id);
                  }
              }
          });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const sentenciaIfCurrentSectionVoid = !currentSection ? 'active-white' : '';
    const sentenciaIf = currentSection === 'White' || currentSection === 'Contacto';

  return (
    <div className='container-navbar'>
        <div className='navbar-container-head'>
            <a href="#Home">
              {sentenciaIf ? 
                <img className='logo' src={'/logo.svg'} alt="" />
              :
                <img className='logo' src={'/logo-color.svg'} alt="" />
              }
            </a>
            <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>

        <ul className={`menu ${isOpen ? 'open' : ''} ${sentenciaIfCurrentSectionVoid} ${sentenciaIf ? 'active-white' : ''}`}>
            <li><a href="#Nosotros" className={currentSection === 'Nosotros' ? 'active' : ''}>Nosotros</a></li>
            <li><a href="#Servicios" className={currentSection === 'Servicios' ? 'active' : ''}>Servicios</a></li>
            <li><a href="#Proyectos" className={currentSection === 'Proyectos' ? 'active' : ''}>Proyectos</a></li>
            <li><a href="#Contacto" className={currentSection === 'Contacto' ? 'active' : ''}>Contacto</a></li>
        </ul>
    </div>
  )
}
