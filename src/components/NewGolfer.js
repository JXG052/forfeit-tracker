import { useState } from 'react'
import { app, database } from '../firebaseConfig.js'
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'

export default function NewGolfer() {
    const collectionRef = collection(database, 'golfers');
    const [name, setName] = collectionRef(database, 'name')
    const [threePutts, setThreePutts] = useState("")
    const [triples, setTriples] = useState("")
    const [bunker, setBunker] = useState("")
    const [late, setLate] = useState("");
    const [nr, setNr] = useState("");
    const [shed, setShed] = useState("");
    const [tree, setTree] = useState("");
    const [water, setWater] = useState("");

    
    const handleInput = (event) => {
        console.log(event.target.value)
    }
    
    const handleSubmit = () => {
        addDoc(collectionRef, {
            name: setName,
            threePutts: threePutts,
            triples: triples,
            bunker: bunker,
            late: late,
            nr: nr,
            shed: shed,
            tree: tree, 
            water: water
        })
        .then(()=> {
            alert("data added")
        })
        .catch((error)=> {
            console.log(error)
        })
    }
  return (
    <div className='newGolferDiv'>
        <input 
            name='threePutts'
            placeholder='Three putts'
            onChange={(event) =>handleInput(event)}
        />
          <input
              name='triples'
              placeholder='triples'
              onChange={(event) => handleInput(event)}
          />

    </div>
  )
}
