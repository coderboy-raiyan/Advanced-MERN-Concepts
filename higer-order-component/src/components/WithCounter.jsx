import { useState } from "react";

function WithCounter(Component) {
  function newMadeComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    if (!isLoggedIn) {
      return "Please login";
    }
    const [counter, setCounter] = useState(0);
    function increase() {
      setCounter((prev) => prev + 1);
    }
    return <Component counter={counter} increase={increase} {...props} />;
  }

  return newMadeComponent;
}

export default WithCounter;
