import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/reset.css";
import Home from "./layout/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
