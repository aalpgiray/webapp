import { StoreProvider } from "easy-peasy";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import store from "./store";

import "antd/dist/antd.css";

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);
