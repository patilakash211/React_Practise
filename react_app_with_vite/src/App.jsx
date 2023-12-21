import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello Akash</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
