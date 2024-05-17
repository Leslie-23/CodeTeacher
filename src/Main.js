import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AsideTwo from "./Components/AsideTwo";
import html from "./ChallengeJS/html";
import css from "./ChallengeJS/css";
import javaScript from "./ChallengeJS/javaScript";

const Main = () => {
  return (
    <div>
      <header className="jersey-25-charted-regular">
        Choose your Challenge{" "}
      </header>
      <AsideTwo />
    </div>
  );
};

export default Main;
