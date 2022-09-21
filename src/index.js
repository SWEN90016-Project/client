import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import "flowbite";
import 'tw-elements';

// import "tw-elements";
// const app = document.getElementById("app");
// ReactDOM.render(<App />, app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
