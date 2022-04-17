import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";

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
          <Button variant="primary">Book Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;