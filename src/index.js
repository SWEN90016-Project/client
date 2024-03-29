import React from "react";
import "./index.css";
import App from "./App.js";
import "flowbite";
import "tw-elements";

import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
