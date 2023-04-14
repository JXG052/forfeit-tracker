import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function MoneyListTable({info}) {
    const [data] = useState(info)
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Golfer</TableCell>
                    <TableCell align="right">Rounds</TableCell>
                    <TableCell align='right'>Best Finish</TableCell>
                    <TableCell align="right">Profit/Loss</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((golfer, index) => (
                    <TableRow key={index}>
                        <TableCell>{golfer.name}</TableCell>
                        <TableCell>{golfer.rounds}</TableCell>
                        <TableCell>{golfer.bestFinish}</TableCell>
                        <TableCell>£{golfer.profit}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
