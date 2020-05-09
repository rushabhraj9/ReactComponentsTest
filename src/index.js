import React from "react";
import ReactDOM from "react-dom";
import { List } from "./List";
import Heading from "./Heading.jsx";
const date = new Date();

const hours = date.getHours();

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
