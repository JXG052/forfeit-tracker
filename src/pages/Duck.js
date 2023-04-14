import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { Avatar } from '@mui/material';




export default function Duck({ info }) {
    const [data] = useState(info)
    const getTotal = (data) => {
        let sum = data.tree + data.water + data.bunker + data.triple + data.late + data.nr + data.threePutt + data.shed;
        return sum;
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt="Alex Duckett" sx={{ m: 2, width: 112, height: 112 }} src="./images/duck.jpg" />
            <Typography variant="h3">{data.name}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Forfeit </TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key="duckTriples">
                            <TableCell component="th" scope="row">
                                Triple Bogey's
                            </TableCell>
                            <TableCell align="right">{data.triple}</TableCell>
                        </TableRow>
                        <TableRow key="duckThreePutts">
                            <TableCell component="th" scope="row">
                                Three Putts
                            </TableCell>
                            <TableCell align="right">{data.threePutt}</TableCell>
                        </TableRow>
                        <TableRow key="duckLates">
                            <TableCell component="th" scope="row">
                                Lates
                            </TableCell>
                            <TableCell align="right">{data.late}</TableCell>
                        </TableRow>
                        <TableRow key="duckBunkers">
                            <TableCell component="th" scope="row">
                                Stayed in bunkers
                            </TableCell>
                            <TableCell align="right">{data.bunker}</TableCell>
                        </TableRow>
                        <TableRow key="duckNrs">
                            <TableCell component="th" scope="row">
                                N/R's
                            </TableCell>
                            <TableCell align="right">{data.nr}</TableCell>
                        </TableRow>
                        <TableRow key="duckSheds">
                            <TableCell component="th" scope="row">
                                Shed balls
                            </TableCell>
                            <TableCell align="right">{data.shed}</TableCell>
                        </TableRow>
                        <TableRow key="duckTrees">
                            <TableCell component="th" scope="row">
                                Sam's Tree
                            </TableCell>
                            <TableCell align="right">{data.tree}</TableCell>
                        </TableRow>
                        <TableRow key="duckWater">
                            <TableCell component="th" scope="row">
                                Water balls
                            </TableCell>
                            <TableCell align="right">{data.water}</TableCell>
                        </TableRow>
                        <TableRow key="duckTotal">
                            <TableCell component="th" scope="row">
                                Total
                            </TableCell>
                            <TableCell align="right">{getTotal(data)}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
