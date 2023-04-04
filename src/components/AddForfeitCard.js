import React, { useEffect, useState } from 'react'
import { doc, collection, updateDoc, onSnapshot, getDocs } from 'firebase/firestore';
import { database } from '../firebaseConfig'
import './AddForfeitCard.css'

import { MenuItem, Button, Box, InputLabel, FormControl, Select } from '@mui/material';

export default function AddForfeitCard(prop) {
    // const userRef = database.collection("golfers").doc(prop.name);
    
    // const [data, setData] = useState({})
    // const [name, setName] = useState("")
    // const [threePutts, setThreePutts] = useState(userRef.threePutts)
    // const [triples, setTriples] = useState("")
    // const [bunker, setBunker] = useState("")
    // const [late, setLate] = useState("");
    // const [nr, setNr] = useState("");
    // const [shed, setShed] = useState("");
    // const [tree, setTree] = useState("");
    // const [water, setWater] = useState("");
    const [forfeit, setForfeit] = useState("")
    const [count, setCount] = useState(0)
    const [golfer, setGolfer] = useState("")

    const chooseGolfer = (event) => {
        setGolfer(event.target.value)
        console.log(event.target.value)
    }

    const chooseForfeit = (event) => {
        let selectedForfeit = event.target.value
        setForfeit(selectedForfeit)
        console.log(forfeit)
    }

    const handleSubmit = () => {
        console.log(
            `Data to be added to database:
            Golfer: ${golfer}
            Forfeit: ${forfeit}`)
        const golfersRef = doc(database, "golfers", golfer);
        updateDoc(golfersRef, {
            [forfeit] : 1
        })
        alert("Data Added")
    }

    const getData =  () => {
        const collectionRef = collection(database, "golfers");
        // getDocs(collectionRef).then((data) => {
        //     console.log(
        //         data.docs.map((item) =>{
        //             return item.data();
        //         })
        //     )
        // })
        onSnapshot(collectionRef, (data) => {
            console.log(
                data.docs.map((item) => {
                    return item.data();
                })
            )
        })
    };




    return (
        <>
            {/* <input type="text" placeholder='enter golfers name' onChange={
            (event) => AddGolfer(event)}></input>
            <button name='triple' onClick={(event) => {
                AddForfeit(event)
            }}>Add Triple</button>
            <button>Add three putt</button>
            <button>Add bunker</button>
            <button>Water on 17</button>
            <button>Shed</button>
            <button>Tree</button>
            <button>N/R's</button>
            <button>Late</button>
            <h1>{golfer}</h1>
            <h2>{forfeit}</h2>
            <h2>{count}</h2> */}
            <Box sx={{ minWidth: 120, display: 'flex', flexDirection: 'column' }}>
                <FormControl fullWidth>
                    <InputLabel id="select-golfer-label">Golfer</InputLabel>
                    <Select
                        className='selectOption'
                        labelId='select-golfer-label'
                        id='select-golfer'
                        value={golfer}
                        label='golfer'
                        onChange={chooseGolfer}
                    >
                        <MenuItem value={"Jonny"}>Jonny</MenuItem>
                        <MenuItem value={"Duck"}>Duck</MenuItem>
                        <MenuItem value={"Sam"}>Sam</MenuItem>
                        <MenuItem value={"Matty"}>Matty</MenuItem>
                        <MenuItem value={"Steel"}>Steel</MenuItem>
                    </Select>

                </FormControl>
                <FormControl fullWidth>

                    <InputLabel id="select-forfeit-label">Forfeit</InputLabel>
                    <Select
                        className='selectOption'
                        labelId='select-forfeit-label'
                        id='select-forfeit'
                        value={forfeit}
                        label='forfeit'
                        onChange={chooseForfeit}
                    >
                        <MenuItem value={"triple"}>Triple</MenuItem>
                        <MenuItem value={"threePutt"}>Three Putt</MenuItem>
                        <MenuItem value={"bunker"}>Stayed in Bunker</MenuItem>
                        <MenuItem value={"late"}>Late for tee time</MenuItem>
                        <MenuItem value={"nr"}>N/R</MenuItem>
                        <MenuItem value={"shed"}>Shed</MenuItem>
                        <MenuItem value={"tree"}>Sam Glaves' Money Tree</MenuItem>
                        <MenuItem value={"water"}>Water</MenuItem>
                    </Select>
                </FormControl>
                <Button align="center" variant='contained' onClick={handleSubmit}>Confirm</Button>
                <Button align="center" variant='contained' onClick={getData}>Get Collection</Button>
            </Box>
        </>
    )
}
