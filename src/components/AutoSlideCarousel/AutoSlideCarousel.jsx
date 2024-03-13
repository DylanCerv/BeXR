import React from 'react';
import './AutoSlideCarousel.css'
import CardCarousel from '../CardCarousel/CardCarousel';

const AutoSlideCarousel = ({items}) => {

  if (!items || items.length === 0) {
    return null;
  }

  const translateXValue = `calc(-400px * ${items.length} - 0.5rem * ${items.length * 2})`;
  

  return (
    <div className='auto-slide-carousel ' data-aos="fade-left" data-aos-duration="1000">
        <div className='auto-slide-carousel-sub-container animate-scroll' style={{'--translate-x': translateXValue}} >
          {items && items.map((items, index)=>(
            <CardCarousel key={index} srcImg={items.src} title={items.title} description={items.description} />
          ))}
          {items && items.map((items, index)=>(
            <CardCarousel key={index} srcImg={items.src} title={items.title} description={items.description} />
          ))}
        </div>
    </div>
  );
};

export default AutoSlideCarousel;
