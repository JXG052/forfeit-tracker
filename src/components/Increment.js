import React, { useState } from 'react'
// import { doc, updateDoc, increment } from "firebase/firestore";



export default function Increment() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement(){
    setCount(count -1);
  }
   
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}
