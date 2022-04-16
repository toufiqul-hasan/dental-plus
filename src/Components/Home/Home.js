import { Carousel } from "react-bootstrap";
import React from "react";
import carousel1 from "../../Assets/Images/carousel1.jpg";
import carousel2 from "../../Assets/Images/carousel2.jpg";
import carousel3 from "../../Assets/Images/carousel3.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
