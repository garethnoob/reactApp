import { useState } from "react";


function Heading() {
  const [count, setCount] = useState(0);

  return (
      <>
        <h1>The count currently sits as {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </>
    );
}

export default Heading;