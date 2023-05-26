import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function MoneyListTable({ info }) {
    const [data] = useState(info)
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ranking</TableCell>
                        <TableCell>Golfer</TableCell>
                        <TableCell align="right">Rounds</TableCell>
                        <TableCell align='right'>Best Finish</TableCell>
                        <TableCell align="right">FedEx Points </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {data.map((golfer, index) => (
                        <TableRow key={index}>
                            <TableCell>{golfer.name}</TableCell>
                            <TableCell>{golfer.rounds}</TableCell>
                            <TableCell>{golfer.bestFinish}</TableCell>
                            <TableCell>{golfer.points} points</TableCell>
                        </TableRow>
                    ))} */}
                    <TableRow key="0"> {/* Jonny */}
                        <TableCell>{data[1].ranking}</TableCell>
                        <TableCell>{data[1].name}</TableCell>
                        <TableCell>{data[1].rounds}</TableCell>
                        <TableCell>{data[1].bestFinish}</TableCell>
                        <TableCell>{data[1].points} points</TableCell>
                    </TableRow>
                    <TableRow key="0"> {/* Duckett */}
                        <TableCell>{data[0].ranking}</TableCell>
                        <TableCell>{data[0].name}</TableCell>
                        <TableCell>{data[0].rounds}</TableCell>
                        <TableCell>{data[0].bestFinish}</TableCell>
                        <TableCell>{data[0].points} points</TableCell>
                    </TableRow> 

                    <TableRow key="0"> {/* Matty */}
                        <TableCell>{data[3].ranking}</TableCell>
                        <TableCell>{data[3].name}</TableCell>
                        <TableCell>{data[3].rounds}</TableCell>
                        <TableCell>{data[3].bestFinish}</TableCell>
                        <TableCell>{data[3].points} points</TableCell>
                    </TableRow>
                    <TableRow key="0"> {/* Sam */}
                        <TableCell>{data[5].ranking}</TableCell>
                        <TableCell>{data[5].name}</TableCell>
                        <TableCell>{data[5].rounds}</TableCell>
                        <TableCell>{data[5].bestFinish}</TableCell>
                        <TableCell>{data[5].points} points</TableCell>
                    </TableRow>
                    <TableRow key="0"> {/* Phil */}
                        <TableCell>{data[4].ranking}</TableCell>
                        <TableCell>{data[4].name}</TableCell>
                        <TableCell>{data[4].rounds}</TableCell>
                        <TableCell>{data[4].bestFinish}</TableCell>
                        <TableCell>{data[4].points} points</TableCell>
                    </TableRow>
                    <TableRow key="0"> {/* Lewis */}
                        <TableCell>{data[2].ranking}</TableCell>
                        <TableCell>{data[2].name}</TableCell>
                        <TableCell>{data[2].rounds}</TableCell>
                        <TableCell>{data[2].bestFinish}</TableCell>
                        <TableCell>{data[2].points} points</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}
