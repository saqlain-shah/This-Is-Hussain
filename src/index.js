import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const loadStylesheets = () => {
  // Function to load the CSS stylesheets dynamically
  const stylesheets = [
    "/path/to/EnglishVersion.css?v=1.0",
    "/path/to/UrduVersion.css?v=1.0",
  ];

  stylesheets.forEach((url) => {
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  });
};

// Call the function to load the stylesheets
loadStylesheets();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
