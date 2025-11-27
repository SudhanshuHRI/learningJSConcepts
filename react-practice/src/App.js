import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(0);

  const handleTimer = (cmd) => {
    console.log(cmd);
    while (cmd) {
      setData((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <button onClick={() => handleTimer(true)}>Start</button>
      <button onClick={() => handleTimer(false)}>Pause</button>
      <button onClick={() => handleTimer(false)}>Stop</button>
      <button onClick={() => setData(0)}>Reset</button>
      <h1>The timer is {data}</h1>
    </div>
  );
}

export default App;
