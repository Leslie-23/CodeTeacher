import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
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
    </div>
  );
};

export default AsideTwo;
