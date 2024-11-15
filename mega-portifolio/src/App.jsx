import { useState } from 'react';
import './App.css'

function App() {
  const [number,setNumber] = useState(20);

  const incrementNumber = () => {
    setNumber(number +20);
  };

  const decreaseNumber = () => {
    setNumber(number -1);
  };

  return (
    <>
    <div>
      <p>{number}</p>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decreaseNumber}>decrease</button>
    </div>
   
    </>
  )
}

export default App;
