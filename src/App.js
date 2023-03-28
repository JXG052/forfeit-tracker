import React, { useState } from 'react'
import PlayerCard from './components/PlayerCard';
import PlayerCountTable from './components/PlayerCountTable';
import { database } from './firebaseConfig'
import { collection, getDocs } from "firebase/firestore";



function App() {
  const [user, setUser] = useState("")

  const chooseMatty = () => {
    setUser("Matty")
    console.log("Matty chose")
  }
  const chooseJonny = () => {
    setUser("Jonny")
    console.log("Jonny chose")
  }
  const chooseDuckett = () => {
    setUser("Duckett")
    console.log("Duck chose")
  }

  return (
    <>
      <button onClick={chooseMatty}>Choose Matty</button>
      <button onClick={chooseJonny}>chooseJonny</button>
      <button onClick={chooseDuckett}>Choose Duckett</button>
      <PlayerCard name={user} />
    </>



  );
}

export default App;
