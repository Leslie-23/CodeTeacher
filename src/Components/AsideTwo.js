import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

const AsideTwo = () => {
  return (
    <div className="button-container">
      <Link to="/html" className="tech-button html-button">
        <FaHtml5 className="button-icon" />
        HTML
      </Link>
      <Link to="/css" className="tech-button css-button">
        <FaCss3Alt className="button-icon" />
        CSS
      </Link>
      <Link to="/javascript" className="tech-button js-button">
        <FaJsSquare className="button-icon" />
        JavaScript
      </Link>
      <Link to="/react" className="tech-button react-button">
        <FaReact className="button-icon" />
        React
      </Link>
      <Link to="/node" className="tech-button node-button">
        <FaNodeJs className="button-icon" />
        Node
      </Link>
      <Link to="/django" className="tech-button django-button">
        <SiDjango className="button-icon" />
        Django
      </Link>
      <Link to="/mongo" className="tech-button mongo-button">
        <SiMongodb className="button-icon" />
        MongoDB
      </Link>
    </div>
  );
};

export default AsideTwo;
