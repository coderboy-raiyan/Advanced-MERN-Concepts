import React from "react";
import ClickCounter from "./pages/ClickCounter";
import HoverCounter from "./pages/hoverCounter";

function App() {
  return (
    <div>
      <ClickCounter name="Click Counter" />
      <hr />
      <HoverCounter name="Hover counter" />
    </div>
  );
}

export default App;
