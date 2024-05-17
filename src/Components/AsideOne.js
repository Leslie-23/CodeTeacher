import React from "react";
import "../CSS/App.css";

const AsideOne = () => {
  return (
    <div>
      <div id="home" style={{ padding: "20px" }}>
        <h1>Home</h1>
        <p>Welcome to the homepage!</p>
      </div>
      <div id="about" style={{ padding: "20px" }}>
        <h1>About</h1>
        <p>Learn more about us.</p>
      </div>
      <div id="courses" style={{ padding: "20px" }}>
        <h1>Courses</h1>
        <p>Check out our courses.</p>
      </div>
      <div id="contact" style={{ padding: "20px" }}>
        <h1>Contact</h1>
        <p>Contact us for more information.</p>
      </div>
      <div id="subscribe" style={{ padding: "20px" }}>
        <h1>Subscribe</h1>
        <p>Subscribe to our newsletter.</p>
      </div>
    </div>
  );
};

export default AsideOne;
