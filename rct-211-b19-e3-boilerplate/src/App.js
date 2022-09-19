import { useState } from "react";
import "./App.css";
import { Button, Buttons } from "./Components/Button";
import { Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });
  const [val,setval]=useState("")
  function handleval(e){
    setval(e.target.value)
  }
  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button>
      <button onClick={() => decCount()}>Decrement 2</button>

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Buttons colorScheme="teal" size="xl" variant="ghost"/>
      <br />

      <Input type="Number" size="xl" variant='ghost' value={val} onChange={handleval}/>
    </div>
  );
}

export default App;
