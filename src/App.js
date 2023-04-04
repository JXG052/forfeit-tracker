import React, { useState } from 'react'
import PlayerCard from './components/PlayerCard';
import PlayerCountTable from './components/PlayerCountTable';
import  database  from './firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AddForfeitCard from './components/AddForfeitCard';
import NewGolfer from './components/NewGolfer';
import Increment from './components/Increment';
import GetData from './components/GetData';
// import MyAuthentification from './components/MyAuthentification';



function App() {
  const [user, setUser] = useState("")
  
  const options = [
    'Jonny', 'Duckett', 'Matty'
  ];

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
      {/* <AddForfeitCard name={user} /> */}

      {/* <button onClick={chooseMatty}>Choose Matty</button>
      <button onClick={chooseJonny}>chooseJonny</button>
      <button onClick={chooseDuckett}>Choose Duckett</button>
      <PlayerCard name={user} /> */}
      {/* <MyAuthentification /> */}
      {/* <Increment /> */}
      {/* <AddForfeitCard /> */}
      <GetData />
    </>



  );
}

export default App;
