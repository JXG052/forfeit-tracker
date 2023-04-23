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
import MoneyList from './pages/MoneyList';
import Lewis from './pages/Lewis';
import Phil from './pages/Phil';
import SignIn from './pages/tggLogin';
// import Footer from './components/Footer';

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

  if (!data) {
    return (<div>loading...</div>)
  }

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />

        <NavBar />


        <Routes>
          <Route path='/' element={<Home info={data}/>} />
          <Route path='/ForfeitTracker' element={<ForfeitTracker data={data} />} />
          <Route path='/Jonny' element={<Jonny info={data[1]} />} />
          <Route path='/Sam' element={<Sam info={data[5]} />} />
          <Route path='/Duck' element={<Duck info={data[0]} />} />
          <Route path='/Matty' element={<Matty info={data[3]} />} />
          <Route path='/Lewis' element={<Lewis info={data[2]} />} />
          <Route path='/Steel' element={<Steel info={data[6]} />} />
          <Route path='/Phil' element={<Phil info={data[4]} />} />
          <Route path='/MoneyList' element={<MoneyList info={data} />}></Route>
        </Routes>
        {/* <Footer /> */}
        {/* <SignIn /> */}
      </ThemeProvider>

    </>



  );
}

export default App;
