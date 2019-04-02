import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./tabs";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Tab</h1>
      <Tabs>
        <div label="tab1">Tab1</div>
        <div label="tab2">Tab2</div>
        <div label="tab3">Tab3</div>
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
