import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { database } from './firebaseConfig'
import { collection, onSnapshot } from "firebase/firestore";
import Home from './pages/Home'
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';
import './App.css'
import ForfeitTracker from './pages/ForfeitTracker';
import Jonny from './pages/Jonny';
import Sam from './pages/Sam';
import Duck from './pages/Duck';
import Matty from './pages/Matty';
import Steel from './pages/Steel';
// import AddForfeitCard from './components/AddForfeitCard';
// import MyAuthentification from './components/MyAuthentification';

const myTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: green,
    secondary: lightGreen,
  },
})

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
    getData()
    
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
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
    
      <NavBar />
      {/* <Home info={data}/> */}
      {/* {JSON.stringify(data)} */}
      {/* <AddForfeitCard name={user} /> */}

      {/* <button onClick={chooseMatty}>Choose Matty</button>
      <button onClick={chooseJonny}>chooseJonny</button>
      <button onClick={chooseDuckett}>Choose Duckett</button>
    <PlayerCard name={user} /> */}
      {/* <MyAuthentification /> */}

      
      {/* <GetData info={JSON.stringify(data)} /> */}

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ForfeitTracker' element={<ForfeitTracker data={data} />} />
        <Route path='/Jonny' element={<Jonny info={data[1]} />} />
        <Route path='/Sam' element={<Sam info={data[3]} />} />
        <Route path='/Duck' element={<Duck info={data[0]} />} />
        <Route path='/Matty' element={<Matty info={data[2]} />} />
        <Route path='/Steel' element={<Steel info={data[4]} />} />
      </Routes>
    
    </ThemeProvider>



  );
}

export default App;
