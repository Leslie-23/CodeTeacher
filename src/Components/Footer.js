import React from "react";
const date = new Date().getFullYear();
const name = "Leslie Paul Ajayi";
const company = "PALtech.co";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="jersey-25-charted-regular ">
        So you Think <br /> you can <br />
        <span className="jersey-25-charted-big">CODE</span>
      </h1>
      <p className="footer">
        &copy; {date} - {name} - {company}{" "}
      </p>
    </div>
  );
};

export default Footer;
