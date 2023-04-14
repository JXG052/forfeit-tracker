import React, { useState } from 'react'
import { doc, updateDoc, increment } from 'firebase/firestore';
import { database } from '../firebaseConfig'
// import './AddForfeitCard.css'
import { MenuItem, Button, Box, InputLabel, FormControl, Select } from '@mui/material';
import Alert from '@mui/material/Alert';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Snackbar } from '@mui/material';



export default function AddForfeitCard() {
    const [forfeit, setForfeit] = useState("")
    const [golfer, setGolfer] = useState("")
    const [alertOpen, setAlertOpen] = useState(false);
    const [snackbarOpen, SetSnackbarOpen] = useState(false);



    const chooseGolfer = (event) => {
        event.preventDefault()
        setGolfer(event.target.value)
    }

    const chooseForfeit = (event) => {
        event.preventDefault()
        setForfeit(event.target.value)
    }
    const handleClose = () => {
        setAlertOpen(false);
    };



    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        SetSnackbarOpen(false);
    }
    const getCorrectMessage = (forf) => {
        switch (forf) {
            case 'threePutt':
                return "made a three putt";
            case 'triple':
                return "made a Triple Bogey";
            case 'bunker':
                return "left one in the bunker";
            case 'shed':
                return "hit the shed";
            case 'late':
                return "was late for a tee time";
            case 'n/r':
                return "N/R'd";
            case 'tree':
                return "hit Sam's tree on the 5th";
            case 'water':
                return "went in the pond";
            default:
                break;
        }
    }

    function incrementCount(golferName, forfeitName) {


        const docRef = doc(database, "golfers", golferName);
        updateDoc(docRef, {
            [forfeitName]: increment(1)
        })
            .then(() => {
                console.log("updated successfully")
                setGolfer("");
                setForfeit("");
                SetSnackbarOpen(true)

            }).catch(error => {
                console.error("Error whiilst updating field")
            })
    }

    if (alertOpen) {
        return (
            <div>
                <Dialog
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Add Forfeit?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`Confirm that ${golfer} ${getCorrectMessage(forfeit)}`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={() => {
                            handleClose()
                            incrementCount(golfer, forfeit);
                            SetSnackbarOpen(true);
                        }} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
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

            <Box sx={{ minWidth: 120, display: 'flex', flexDirection: 'column', p: 2, m: 2 }}>

                <FormControl sx={{ m: 2 }}>
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
                <FormControl sx={{ m: 2 }}>

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
                <Button className='my-btn' align="center" variant='contained' sx={{bgcolor: 'primary.700', color: 'secondary.200'}} onClick={() => {
                    setAlertOpen(true)
                }}>Confirm</Button>

            </Box>
            <Snackbar open={snackbarOpen} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    {`Forfeit successfully added`}
                </Alert>
            </Snackbar>
        </>
    )
}
