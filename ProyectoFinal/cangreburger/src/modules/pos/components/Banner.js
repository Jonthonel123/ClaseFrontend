import React from "react";
import {Carousel} from 'react-bootstrap'
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/banner6.jpg"
          alt="Primer slider"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/banner7.jpg"
          alt="Primer slider2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/banner8.jpg"
          alt="Primer slider3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
