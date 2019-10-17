import React from "react";

function Container(props) {
  return (
    <main className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
  );
}

export default Container;
