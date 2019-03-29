import React from "react";
import { hot } from "react-hot-loader/root";
import Notification from "./notification";
import Todos from "./todos";

const App = () => (
  <div>
    <h1>Easy Peasy + Typescript</h1>
    <p>
      This is a demonstration of how to utilise the Typescript integration of{" "}
      <a href="https://github.com/ctrlplusb/easy-peasy">Easy Peasy</a>.
    </p>
    <Todos />
    <Notification />
  </div>
);

export default hot(App);
