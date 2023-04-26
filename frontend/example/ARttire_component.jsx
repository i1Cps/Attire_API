import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArTtire from "./App";
import * as serviceWorker from "./serviceWorker";

const exampleLogo = "https://example.com/logo.png";
const exampleTheme = { primary: "#007bff", secondary: "#6c757d" };
const exampleClothingMeasurements = { /* Your measurements data */ };
const exampleBasketItems = [/* Your basket items data */];

ReactDOM.render(
  <React.StrictMode>
    <ArTtire
      logo={exampleLogo}
      theme={exampleTheme}
      clothingMeasurements={exampleClothingMeasurements}
      basketItems={exampleBasketItems}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
