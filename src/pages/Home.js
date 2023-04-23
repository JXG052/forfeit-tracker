import React, { useState } from 'react'
import './Home.css'
import AddForfeitCard from '../components/AddForfeitCard'
import { Card, Typography } from '@mui/material'
import ImageAvatars from '../components/ImageAvatars'
import TotalPot from '../components/TotalPot'
import { Box } from '@mui/system'
// import { Spacing } from '@mui/system'


export default function Home({ info }) {
    const [data] = useState(info)


    return (
        <>
            <Box className='home-page' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <ImageAvatars />
                <TotalPot info={data} />
            </Box>
                <Card variant='outlined' className='add-forfeit-card' sx={{ m: 2, p: 2 }}>
                    <Typography variant='h5'>Add Forfeit</Typography>
                    <AddForfeitCard />
                </Card>


        </>
    )
}
