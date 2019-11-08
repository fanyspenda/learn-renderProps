import React from "react";
import catImage from "../img/cat.png";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div>
        <img
          src={catImage}
          style={{ position: "relative", left: mouse.x, top: mouse.y }}
          alt="zero"
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Cat;
