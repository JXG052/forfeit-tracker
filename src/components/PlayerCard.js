import React, { useEffect } from 'react'
import PlayerCountTable from './PlayerCountTable';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
// import PlayerCountTable from './PlayerCountTable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function PlayerCard(props) {
    let myName;
    if (props.name === "Matty") {
        myName = "Matty"
    } else if (props.name === "Jonny") {
        myName = "Jonny"
    } else if (props.name === "Duckett") {
        myName = "Duckett"
    } else if (props.name === "Steel") {
        myName = "Steel"
    } else if (props.name === "Phil") {
        myName = "Phil"
    } else {
        myName = "Sam"
    }

    return (
        <Box sx={{border: '1pt solid black'}}>

            <Typography variant='h1'>{myName}</Typography>
            <PlayerCountTable name={myName} />
        </Box>
    )
}
