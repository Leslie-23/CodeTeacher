import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <Link to="/home" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={toggleNavbar}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
          {/* <li>
            <Link to="/APIroute" onClick={toggleNavbar}>
              APIroute
            </Link>
          </li> */}
          {/* <li>
            <Link to="/subscribe" onClick={toggleNavbar}>
              Subscribe
            </Link>
          </li> */}
        </ul>
      </nav>
      {/* <AsideOne /> */}
    </div>
  );
};

export default Navbar;
