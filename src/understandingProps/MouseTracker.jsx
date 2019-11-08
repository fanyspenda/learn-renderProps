import React from "react";
import CatWithMouse from "./CatWithMouse";
import Cat from "./Cat";

class MouseTracker extends React.Component {
  state = {
    text: "ini text dari mouse tracker"
  };
  render() {
    return (
      <>
        {/* <h1>ini header mouse tracker</h1> */}
        <CatWithMouse>
          {mouse => (
            <>
              <Cat mouse={mouse} />
              <p>
                posisi mouse saat ini adalah: ({mouse.x}, {mouse.y})
              </p>
            </>
          )}
        </CatWithMouse>
      </>
    );
  }
}

export default MouseTracker;
