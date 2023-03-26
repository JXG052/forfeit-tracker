import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, count) {
    return { name, count };
}

const rows = [
    createData('Triple or above', "0"),
    createData('3 putt', "0"),
    createData('Bunker Bitch', "0"),
    createData('Water on 17', 0),
    createData('Shed', 0),
    createData('SG Money Tree', 0),
    createData("N/R's", 0),
    createData('FedEx ranking'),
    createData('Late for tee time', 0)
];


export default function PlayerCountTable() {
    return (
        <TableContainer sx={{padding: '1rem'}} component={Paper}>
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
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
