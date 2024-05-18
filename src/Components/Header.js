import "../CSS/App.css";
import React from "react";
import APIroute from "./APIroute";

const Header = () => {
  return (
    <div>
      <div className="row-wrap">
        <h1 className="jersey-25-charted-regular01">
          So you Think <br /> you can <br />
          <span className="jersey-25-charted-big">CODE</span>
        </h1>
        <APIroute />
      </div>
    </div>
  );
};

export default Header;
