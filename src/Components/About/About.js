import React from "react";
import "./About.css";
import me from "../../Assets/Images/me.png";

const About = () => {
  return (
    <div>
      <div className="about">
        <img src={me} alt="" />
      </div>
      <div className="about">
        <p>
          Hi, I'm <b>Toufiqul Hasan</b>. I want to become a web developer in
          2022. My goal is become a full stack web developer. I consider myself
          a diligent individual. To succeed in an environment of growth and
          excellence and earn a job which provides me job satisfaction,
          self-development, having career advancement, and help me achieve
          personal as well as organizational goals.
        </p>
      </div>
    </div>
  );
};

export default About;