import React from "react";
import WithCounter from "../components/withCounter";

function HoverCounter({ name, counter, increase }) {
  return (
    <div onMouseEnter={increase}>
      {name}
      <h1>{counter}</h1>
    </div>
  );
}

export default WithCounter(HoverCounter);
