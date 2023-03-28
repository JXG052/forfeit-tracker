import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { database } from '../firebaseConfig'
import { collection, getDocs } from "firebase/firestore";




export default function PlayerCountTable(props) {
    const collectionRef = collection(database, "golfers")
    const [data, setData] = useState({})
    const [name, setName] = useState("")
    const [threePutts, setThreePutts] = useState("")
    const [triples, setTriples] = useState("")
    let key;
    
    const checkGolfer = (name) =>{
        if (name === "Jonny") {
            key = 1
        } else if (name === "Duckett") {
            key = 0
        } else {
            key = 2
        }
    }
    

    // function createData(forfeitName, count) {
    //     return { forfeitName, count };
    // }


    useEffect(() => {
        checkGolfer(props.name)


        getDocs(collectionRef).then((response) => {
            let myData = response.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
            // console.log(JSON.stringify(myData))
            setName(myData[key].name)
            setThreePutts(myData[key].threePutts)
            setTriples(myData[key].triples)
            // rows = [
            //     createData('Triple or above', myData[0].name),
            //     createData('3 putt', "0"),
            //     createData('Bunker Bitch', "0"),
            //     createData('Water on 17', 0),
            //     createData('Shed', 0),
            //     createData('SG Money Tree', 0),
            //     createData("N/R's", 0),
            //     createData('FedEx ranking'),
            //     createData('Late for tee time', 0)
            // ];

        })

    }, [])



    //     getDocs(collectionRef).then((response) => {
    //         let myData = response.docs.map((item) => {
    //             return { ...item.data(), id: item.id }
    //         })

    //         console.log(data)
    //     })
    // }, [])






    return (
        <div>
            <p>
            name = {name}
            </p>
            <p>
            {name} has had {triples} triples
            </p>
            <p>
                {name} has had {threePutts} threePutts
            </p>
        </div>
        // <TableContainer sx={{ padding: '1rem' }} component={Paper}>
        //     <Table size="small" aria-label="a dense table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>Forfeit</TableCell>
        //                 <TableCell align="right">Count</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {rows.map((row) => (
        //                 <TableRow
        //                     key={row.forfeitName}
        //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        //                     <TableCell component="th" scope="row">
        //                         {row.forfeitName}
        //                     </TableCell>
        //                     <TableCell align='right'>{row.count}</TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    )
}
