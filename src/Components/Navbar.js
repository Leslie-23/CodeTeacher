import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/App.css";
import AsideOne from "./AsideOne";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>
        </ul>
      </nav>
      {/* <AsideOne /> */}
    </div>
  );
};

export default Navbar;
