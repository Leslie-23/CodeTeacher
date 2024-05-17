import React from "react";
// import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div>
      <h1 className="jersey-25-charted-regular">
        We cater to these needs for now, looking to grow to a target audience of
        500
        <br /> then we can improve the courses.
      </h1>
      <h2 className="jersey-25-charted-regular">
        Just enough time for you to go through these and heck them out.
      </h2>
      <div className="button-container">
        <Link to="/html" className="tech-button html-button">
          <FaHtml5 className="button-icon" />
        </Link>
        <Link to="/css" className="tech-button css-button">
          <FaCss3Alt className="button-icon" />
        </Link>
        <Link to="/javascript" className="tech-button js-button">
          <FaJsSquare className="button-icon" />
        </Link>
        <Link to="/react" className="tech-button react-button">
          <FaReact className="button-icon" />
        </Link>
        <Link to="/node" className="tech-button node-button">
          <FaNodeJs className="button-icon" />
        </Link>
        <Link to="/django" className="tech-button django-button">
          <SiDjango className="button-icon" />
        </Link>
        <Link to="/mongo" className="tech-button mongo-button">
          <SiMongodb className="button-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Courses;
