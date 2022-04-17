import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Link to="/checkout">
            <Button variant="primary">Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;