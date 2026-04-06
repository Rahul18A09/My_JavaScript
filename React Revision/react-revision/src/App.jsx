import { useState } from "react";
import axios from "axios";


function App() {
  const [count, setCount] = useState(0);

  async function getUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(response.data);
  }

  return (
    <>
      <div className="demo">
        <div className="count">
          <h2>Count: {count}</h2>

          <button onClick={() => setCount(count + 1)}>Increase</button>

          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>

      <div className="btn">
        <button onClick={getUsers}>Click</button>
      </div>

    
    </>
    // Inline Eventhandler
  );
}

export default App;
