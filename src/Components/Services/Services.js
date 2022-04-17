import React from 'react';
import useServices from '../../hooks/useServices';
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices([]);
  return (
    <div>
      <div className="services">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
    </div>
  );
};

export default Services;