import { StrictMode } from "react";
import { ReactDOM } from "react-dom";

import { GoogleMap } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GoogleMap />
  </StrictMode>,
  rootElement
);
