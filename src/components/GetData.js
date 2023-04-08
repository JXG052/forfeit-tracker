import { useEffect, useState } from "react"
import { app, database } from "../firebaseConfig"
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore"
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export default function GetData({ info }) {
    const [data, setData] = useState(info)


    // function createData(forfeitName, Jonny, Sam, Duck) {
    //     return { forfeitName, Jonny, Sam, Duck };
    // }
    const getTotal = (data) => {
        let sum = data.tree + data.water + data.bunker + data.triples + data.late + data.nr + data.threePutts + data.shed; 
        return sum;
    }

    



    // useEffect(() => {
    //     getData()
    // }, [])

    // useEffect(() => {
    //     console.log(data)
    // }, [data])


    // if (!data) {
    //     return <div>Loading...</div>;
    // }








    return (
        <>

            {/* <div>
                {JSON.stringify(data)}
            </div> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="forfeit-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Forfeit</TableCell>
                            <TableCell align="right">{data[0].name}</TableCell>
                            <TableCell align="right">{data[1].name}</TableCell>
                            <TableCell align="right">{data[2].name}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell component='th' scope="row">Triple Bogeys</TableCell>
                            <TableCell align="right">{data[0].triples}</TableCell>
                            <TableCell align="right">{data[1].triples}</TableCell>
                            <TableCell align="right">{data[2].triples}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Three Putts</TableCell>
                            <TableCell align="right">{data[0].threePutts}</TableCell>
                            <TableCell align="right">{data[1].threePutts}</TableCell>
                            <TableCell align="right">{data[2].threePutts}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Sam Glaves' Tree</TableCell>
                            <TableCell align="right">{data[0].tree}</TableCell>
                            <TableCell align="right">{data[1].tree}</TableCell>
                            <TableCell align="right">{data[2].tree}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Water</TableCell>
                            <TableCell align="right">{data[0].water}</TableCell>
                            <TableCell align="right">{data[1].water}</TableCell>
                            <TableCell align="right">{data[2].water}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Shed</TableCell>
                            <TableCell align="right">{data[0].shed}</TableCell>
                            <TableCell align="right">{data[1].shed}</TableCell>
                            <TableCell align="right">{data[2].shed}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">N/R</TableCell>
                            <TableCell align="right">{data[0].nr}</TableCell>
                            <TableCell align="right">{data[1].nr}</TableCell>
                            <TableCell align="right">{data[2].nr}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Late</TableCell>
                            <TableCell align="right">{data[0].late}</TableCell>
                            <TableCell align="right">{data[1].late}</TableCell>
                            <TableCell align="right">{data[2].late}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Total</TableCell>
                            <TableCell align="right">{getTotal(data[0])}</TableCell>
                            <TableCell align="right">{getTotal(data[1])}</TableCell>
                            <TableCell align="right">{getTotal(data[2])}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h2>Total Forfeits = £{getTotal(data[0]) + getTotal(data[1]) + getTotal(data[2])}</h2>
        </>
    )
}