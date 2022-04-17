import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from "../../Assets/Images/carousel1.jpg";
import carousel2 from "../../Assets/Images/carousel2.jpg";
import carousel3 from "../../Assets/Images/carousel3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="First slide" />
            <Carousel.Caption>
              <h1>BEST CHOICE FOR DENTAL CLINIC</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="Second slide" />
            <Carousel.Caption>
              <h1>PROVIDE BEST DENTAL CARE</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="Third slide" />
            <Carousel.Caption>
              <h1>BEST DENTAL CLINIC IN THIS CITY</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Banner;