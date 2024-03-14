import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CarouselHero.css'

export default function CarouselHero() {


  // const images = [
  //   'https://framerusercontent.com/images/6srabKMHPiRM6zdtYiM01HzJbn4.png',
  //   'https://framerusercontent.com/images/AZxDWREZTCBf4FLC50IIseV2SIo.png',
  //   'https://framerusercontent.com/images/6srabKMHPiRM6zdtYiM01HzJbn4.png',
  //   'https://framerusercontent.com/images/XoWyOImwCu09vFg93IWQrpIkLA.png',
  //   'https://framerusercontent.com/images/PSLU24HTiNhZwKobmbWlSdYKgA.png',
  // ]


  const images = [
    '/public/personsHero/1.png',
    '/public/personsHero/2.png',
    '/public/personsHero/3.png',
    '/public/personsHero/4.png',
  ]


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
        <img className='item-img hidden'  src={'/public/personsHero/4.png'}  />
      <Slider {...settings}>
        {images.map((image, index) => (
            <img  className='item-img' key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slider>
    </div>
  )
}
