import React from "react";
import ReactDOM, { render } from "react-dom";
import Tree from "./Tree";
import data from "./data";
const rootElement = document.getElementById("root");
const Trees = () => {
  return <Tree data={data} width={600} height={500} />;
};
ReactDOM.render(<Trees />, rootElement);
export default Trees;
// render(<Trees />, document.getElementById("root"));
