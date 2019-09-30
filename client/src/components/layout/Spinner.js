import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: 200, margin: "auto", display: "block" }}
      alt="Loading..."
    />
  );
}

export default Spinner;