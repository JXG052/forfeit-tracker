import React, { useState } from 'react'
import PlayerCard from './components/PlayerCard';
import PlayerCountTable from './components/PlayerCountTable';
import { database } from './firebaseConfig'
import { collection, getDocs } from "firebase/firestore";



function App() {



  return (
    <>
      <PlayerCountTable
        name="Duckett"
      />
    </>


  );
}

export default App;
