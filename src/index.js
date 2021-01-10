import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App.js";
//WHEN START CODESANDBOX AUTOMATICALLY SHOW
//NOW START //
//LETS GO

const insta = "https://www.instagram.com/think_with_code/";
ReactDOM.render(
  <div className="App">
    <h2>
      <a href={insta}>THINK WITH CODE</a>
    </h2>
    <App />
  </div>,
  document.getElementById("root")
);
