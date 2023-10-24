import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";


const Example1=()=> {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}
const rootElement = document.getElementById("root");
export { Example1, Scene };


ReactDOM.render(<Example1 />, rootElement);
export default Example1;
/* NOTE TO FUTURE SELF

  I added this to index.html:

  <style>
    html, body, div {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  </style>
*/
