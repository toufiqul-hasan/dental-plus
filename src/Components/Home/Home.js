import React from "react";
import useServices from "../../hooks/useServices";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import Service from "../Service/Service";

const Home = () => {
  const [services] = useServices([]);
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <h1 className="text-center mt-5">Services</h1>
        <div className="services">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;