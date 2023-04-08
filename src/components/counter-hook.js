import { useState } from 'react'
// import { doc, updateDoc, increment } from "firebase/firestore";



export default function useCounter(val, step) {
  const [count, setCount] = useState(val);

  function Increment() {
    setCount(count + step);
  }

  function Decrement(){
    setCount(count - step);
  }
   
    return [count, Increment, Decrement]
}
