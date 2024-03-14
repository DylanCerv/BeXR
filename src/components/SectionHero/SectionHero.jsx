import React from 'react'
import './SectionHero.css'
import CarouselHero from '../CarouselHero/CarouselHero';

export default function SectionHero() {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  // particlesJS.load('particles-js', '/particlesjs-config.json', function() {
    // console.log('callback - particles-js config loaded');
  // });

  return (
    <div id='particles-js'>
      <section id='Home' className='section section-hero'>
        <CarouselHero />
        <article className='container-section-content'>
          <div className='blur-circle-orange blur-circle-1' />
          <div className='blur-circle-orange blur-circle-2' />
          <div className='blur-circle-orange blur-circle-3' />
          <div className='blur-circle-orange blur-circle-4' />

          
          <div className='blur-circle-grey blur-circle-5' />
          <div className='blur-circle-grey blur-circle-6' />
          {/* <div className='blur-circle-grey blur-circle-7' /> */}
          <div className='group-title'>
              <h1 className='barlow-condensed-bold title zoom-animation'>EL FUTURO</h1>
              <h1 className='barlow-condensed-bold title orange zoom-animation-double'>ESTÁ AQUÍ</h1>
          </div>
        </article>
        <img
          className='image-franja-home'
          src="/sections/Franjas home.png"
          alt=""
        />
      </section>
    </div>
  )
}
