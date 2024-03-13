import React from 'react'
import './CardCarousel.css'

export default function CardCarousel({srcImg, title, description}) {
  return (
    <div className='card-carousel'>
      <img
        className='image-carousel'
        src={srcImg}
        alt=""
      />
      <div className='card-carousel-texts'>
        <h3 className='card-carousel-title barlow-condensed-bold'>{title}</h3>
        {description && <p className='card-carousel-description'>{description}</p>}
      </div>
    </div>
  )
}
