import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import CardCarousel3D from "../CardCarousel3D/CardCarousel3D";
import './Carousel3D.css'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel3D() {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);

  const slides = [
    {
      key: uuidv4(),
      content: <CardCarousel3D
          src="/videos/Nerja.mp4"
          title={"Cuevas de Nerja"}
        />
    },
    {
      key: uuidv4(),
      content: <CardCarousel3D
          src="/videos/Quality AR.mp4"
          title={"Quality AR"}
        />
    },
    {
      key: uuidv4(),
      content: <CardCarousel3D
          src="/videos/Metadiverso.mp4"
          title={"Metadiverso"}
        />
    },
  ];

  

    return (
      <div className="container" data-aos="fade-left" data-aos-duration="1000">
        <div className="button-container prev">
          <IoIosArrowBack size={40} className="row" onClick={() => setGoToSlide(goToSlide - 1)}/>
        </div>
        <Carousel
          className='carousel-3d'
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          animationConfig={config.gentle}
        />
        <div className="button-container next">
          <IoIosArrowForward size={40} className="row" onClick={() => setGoToSlide(goToSlide + 1)}/>
        </div>
      </div>
    );
}