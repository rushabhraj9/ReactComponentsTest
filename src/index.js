import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

const date = new Date();

const hours = date.getHours();

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
