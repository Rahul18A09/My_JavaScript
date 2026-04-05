import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className="demo">
    //   <div className="count">
    //     <h2>Count: {count}</h2>
    //     <button onClick={() => setCount(count + 1)}>Increase</button>
    //     <button onClick={() => setCount(count - 1)}>Decrease</button>
    //   </div>
    // </div>

    // Inline Eventhandler

    <button onClick={() => console.log("button clicked")}>CLick</button>
  );
}

export default App;
