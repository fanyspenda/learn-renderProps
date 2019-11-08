import React from "react";
import CatWithMouse from "./CatWithMouse";

class MouseTracker extends React.Component {
  state = {
    text: "ini text dari mouse tracker"
  };
  render() {
    return (
      <>
        <CatWithMouse text={this.state.text} />
      </>
    );
  }
}

export default MouseTracker;
