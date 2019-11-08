import React from "react";
import MouseTracker from "./understandingProps/MouseTracker";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <MouseTracker />
      </div>
    );
  }
}

export default App;
