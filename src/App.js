import React, { useState } from "react";
import "./styles.css";

function App() {
  setInterval(updateTime, 1000);

  const [count, setCount] = useState(0); //Always they work in function

  const time = new Date().toLocaleTimeString();
  const [timenow, settimeNow] = useState(time);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function updateTime() {
    let currentTime = new Date().toLocaleTimeString();
    settimeNow(currentTime);
  }
  return (
    <div>
      {/* NOW  WE SET AUTOMATICALLY THEY WORK  */}
      <h2> {timenow} </h2>

      {/* //HERE WE ADD ONCLICK FUNCTION (UPDATETIME) */}
      <h1> {count} </h1>

      <button className="btn" onClick={increase}>
        +
      </button>
      <button className="btn" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default App;
