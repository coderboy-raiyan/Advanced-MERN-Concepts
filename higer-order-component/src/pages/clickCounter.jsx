import React from "react";
import WithCounter from "../components/withCounter";

function ClickCounter({ name, counter, increase }) {
  return (
    <div>
      <p>{name}</p>
      <h1>{counter}</h1>
      <button onClick={() => increase()}>Click</button>
    </div>
  );
}

export default WithCounter(ClickCounter);
