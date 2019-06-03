import React from "react";
import ReactDOM from "react-dom";
import Flipper from "./Flipper";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Flipper />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
