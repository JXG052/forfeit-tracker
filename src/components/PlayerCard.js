import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import PlayerCountTable from './PlayerCountTable';

export default function PlayerCard(props) {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ border: '1pt solid black', height: '80vh', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'Center' }}>
                <Typography variant='h5'>Jonny</Typography>
                <PlayerCountTable />

                </Box>
            </Container>
        </>
    )
}
