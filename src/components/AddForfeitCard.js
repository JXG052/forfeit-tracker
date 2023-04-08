import React, { useState } from 'react'
import { doc,  updateDoc } from 'firebase/firestore';
import { database } from '../firebaseConfig'
import './AddForfeitCard.css'
import { MenuItem, Button, Box, InputLabel, FormControl, Select } from '@mui/material';

export default function AddForfeitCard() {
    const [forfeit, setForfeit] = useState("")
    const [golfer, setGolfer] = useState("")
    
    const chooseGolfer = (event) => {
        setGolfer(event.target.value)
        console.log(golfer)
    }

    const chooseForfeit = (event) => {
        setForfeit(event.target.value)
        
    }

    function incrementCount(golferName, forfeitName) {
       
        const docRef = doc(database, "golfers", golferName);
        updateDoc(docRef, {
            [forfeitName]: +1
        })
        .then(() => {
            console.log("Field updated successfully")
        }).catch(error => {
            console.error("Error whiilst updating field")
        })
    }

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
                        <MenuItem value="Jonny">Jonny</MenuItem>
                        <MenuItem value="Duckett">Duckett</MenuItem>
                        <MenuItem value="Sam">Sam</MenuItem>
                        <MenuItem value="Matty">Matty</MenuItem>
                        <MenuItem value="Steel">Steel</MenuItem>
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
                        <MenuItem value="triple">Triple</MenuItem>
                        <MenuItem value="threePutt">Three Putt</MenuItem>
                        <MenuItem value="bunker">Stayed in Bunker</MenuItem>
                        <MenuItem value="late">Late for tee time</MenuItem>
                        <MenuItem value="nr">N/R</MenuItem>
                        <MenuItem value="shed">Shed</MenuItem>
                        <MenuItem value="tree">Sam Glaves' Money Tree</MenuItem>
                        <MenuItem value="water">Water</MenuItem>
                    </Select>
                </FormControl>
                <Button align="center" variant='contained' onClick={() => {
                    incrementCount(golfer, forfeit)
                }}>Confirm</Button>

            </Box>
        </>
    )
}
