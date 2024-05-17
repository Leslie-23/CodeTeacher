import React from "react";
// import "../CSS/download.jpg";
// import { FaEnvelope } from "react-icons/fa"; // might use this when scaling to a broader platformSS
const Contact = () => {
  // Inline CSS in JS styling
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "2em",
    marginBottom: "20px",
  };

  const emailContainerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  };

  const logoStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  const emailStyle = {
    fontSize: "1.2em",
    color: "#000",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Contact Me</h1>
      <p>If you would like to get in touch, please reach out via email:</p>
      <div style={emailContainerStyle}>
        {/* <img src="../CSS/download.jpg" alt="Gmail Logo" style={logoStyle} /> */}
        <span style={emailStyle}>leslieajayi27@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
