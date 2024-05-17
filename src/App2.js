import React from "react";
import { Routes, Route } from "react-router-dom";
import html from "./ChallengeJS/html";
import css from "./ChallengeJS/css";
import javaScript from "./ChallengeJS/javaScript";
import MongoDb from "./ChallengeJS/MongoDb";
import Node from "./ChallengeJS/Node";
import myReact from "./ChallengeJS/React";
import Django from "./ChallengeJS/Django";

// import AsideTwo from "./Components/AsideTwo";

function App2() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<TechButtons />} /> */}
        <Route path="/html" Component={html} />
        <Route path="/css" Component={css} />
        <Route path="/javascript" Component={javaScript} />
        <Route path="/react" Component={myReact} />
        <Route path="/node" Component={Node} />
        <Route path="/Django" Component={Django} />
        <Route path="/mongo" Component={MongoDb} />
      </Routes>
      {/* <AsideTwo /> */}
      {/* reusable /\ component useless here but being called in the Main.js */}
    </div>
  );
}

export default App2;
