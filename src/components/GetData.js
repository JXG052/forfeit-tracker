import { useEffect, useState } from "react"
import { app, database } from "../firebaseConfig"
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore"
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export default function GetData() {
    const [data, setData] = useState({})

    // function createData(forfeitName, Jonny, Sam, Duck) {
    //     return { forfeitName, Jonny, Sam, Duck };
    // }

    const getData = () => {
        const collectionRef = collection(database, "golfers");
        onSnapshot(collectionRef, (data) => {

            let myData = data.docs.map((item) => {
                return item.data();
            })
            setData(myData)
        })
    };
    // const [data, setData] = useState({})


    useEffect(() => {
        getData()
        // console.log(JSON.stringify(data))
        console.log(data)
    }, [])









    return (
        <>
            {/* {JSON.stringify(data)} */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="forfeit-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Forfeit</TableCell>
                            <TableCell align="right">Jonny</TableCell>
                            <TableCell align="right">Sam</TableCell>
                            <TableCell align="right">Duckett</TableCell>
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
                            <TableCell align="right">{JSON.stringify(data[0].threePutts)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[1].threePutts)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[2].threePutts)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Sam Glaves' Tree</TableCell>
                            <TableCell align="right">{JSON.stringify(data[0].tree)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[1].tree)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[2].tree)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Water</TableCell>
                            <TableCell align="right">{JSON.stringify(data[0].water)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[1].water)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[2].water)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Shed</TableCell>
                            <TableCell align="right">{JSON.stringify(data[0].shed)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[1].shed)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[2].shed)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">N/R</TableCell>
                            <TableCell align="right">{JSON.stringify(data[0].nr)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[1].nr)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[2].nr)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope="row">Late</TableCell>
                            <TableCell align="right">{JSON.stringify(data[0].late)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[1].late)}</TableCell>
                            <TableCell align="right">{JSON.stringify(data[2].late)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}
