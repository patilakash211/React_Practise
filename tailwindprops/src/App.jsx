import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name:"akash",
    age:27
  }
  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 texxt-black  mb-4">Tailwind test</h1>

      <br />
      <Card name= "Akash Patil" someObj = {myObj} />
    </>
  );
}

export default App;
