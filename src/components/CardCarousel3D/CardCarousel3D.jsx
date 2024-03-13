import React from 'react'
import './CardCarousel3D.css'

export default function CardCarousel3D({title, src}) {
  return (
    <>
      <div className="contaner-video">
        <video
          src={src}
          className='video-element'
          loop
          muted
          playsinline
          autoPlay
        ></video>
        <p className='title-video barlow-condensed-bold'>{title}</p>
      </div>
    </>
  )
}
