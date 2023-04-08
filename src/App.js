import React, { useEffect, useState } from 'react'
import PlayerCard from './components/PlayerCard';
import PlayerCountTable from './components/PlayerCountTable';
import { database } from './firebaseConfig'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AddForfeitCard from './components/AddForfeitCard';
import NewGolfer from './components/NewGolfer';
import useCounter from './components/counter-hook';
import GetData from './components/GetData';
import Home from './pages/Home'
import './App.css'
// import AddForfeitCard from './components/AddForfeitCard';
// import MyAuthentification from './components/MyAuthentification';



function App() {
  const [data, setData] = useState(null)
  const getData = async () => {
    const collectionRef = collection(database, "golfers");
    onSnapshot(collectionRef, (data) => {

      let myData = data.docs.map((item) => {
        return item.data();
      })
      setData(myData)
    })
  };
  useEffect(() => {
    getData();
  }, [data])

  // const options = [
  //   'Jonny', 'Duckett', 'Matty'
  // ];

  // const chooseMatty = () => {
  //   setUser("Matty")
  //   console.log("Matty chose")
  // }
  // const chooseJonny = () => {
  //   setUser("Jonny")
  //   console.log("Jonny chose")
  // }
  // const chooseDuckett = () => {
  //   setUser("Duckett")
  //   console.log("Duck chose")
  // }
  if (!data) {
    return (<div>loading...</div>)
  }

  return (
    <div className='App'>
      <Home info={data}/>
      {/* {JSON.stringify(data)} */}
      {/* <AddForfeitCard name={user} /> */}

      {/* <button onClick={chooseMatty}>Choose Matty</button>
      <button onClick={chooseJonny}>chooseJonny</button>
      <button onClick={chooseDuckett}>Choose Duckett</button>
      <PlayerCard name={user} /> */}
      {/* <MyAuthentification /> */}

      <AddForfeitCard />
      {/* <GetData info={data} /> */}
      
    </div>



  );
}

export default App;
