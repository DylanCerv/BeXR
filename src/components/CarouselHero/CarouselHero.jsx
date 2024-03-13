import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CarouselHero.css'

export default function CarouselHero({images}) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: false,
    pauseOnFocus: false
  };
        
  return (
    <div className='carousel-container-hero'>
      <Slider {...settings}>
        {images.map((image, index) => (
            <img  className='item-img' key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slider>
    </div>
  )
}
