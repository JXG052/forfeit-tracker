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
    const [bunker, setBunker] = useState("")
    const [late, setLate] = useState("");
    const [nr, setNr] = useState("");
    const [shed, setShed] = useState("");
    const [tree, setTree] = useState("");
    const [water, setWater] = useState("");
    let key;

    const checkGolfer = (name) => {
        switch (name) {
            case 'Jonny':
                key = 2;
                break;
            case 'Duckett':
                key = 0;
                break;
            case 'Steel':
                key = 3;
                break;
            case 'Sam':
                key = 4;
                break;
            case 'Matty':
                key = 1;
                break;

        }

    }


    function createData(forfeitName, count) {
        return { forfeitName, count };
    }


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
            setBunker(myData[key].bunker)
            setLate(myData[key].late)
            setNr(myData[key].nr)
            setShed(myData[key].shed)
            setTree(myData[key].tree)
            setWater(myData[key].water)

        })

    }, [props.name])

    const rows = [
        createData('Triple or above', triples),
        createData('3 putt', threePutts),
        createData('Bunker Bitch', bunker),
        createData('Water on 17', water),
        createData('Shed', shed),
        createData('SG Money Tree', tree),
        createData("N/R's", nr),
        createData('Late for tee time', late),
        createData('FedEx ranking'),
        createData('Total', triples + threePutts + bunker + water + shed + tree + nr + late)

    ];



    //     getDocs(collectionRef).then((response) => {
    //         let myData = response.docs.map((item) => {
    //             return { ...item.data(), id: item.id }
    //         })

    //         console.log(data)
    //     })
    // }, [])






    return (
        <>
            
            <TableContainer sx={{ padding: '1rem' }} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Forfeit</TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.forfeitName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.forfeitName}
                                </TableCell>
                                <TableCell align='right'>{row.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
