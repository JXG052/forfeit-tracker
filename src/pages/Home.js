import React from 'react'
import './Home.css'
import AddForfeitCard from '../components/AddForfeitCard'
import { Card, Typography } from '@mui/material'
import ImageAvatars from '../components/ImageAvatars'
// import { Spacing } from '@mui/system'


export default function Home() {

    return (
        <>
            <div className='home-page'>
                <ImageAvatars />
                <Card variant='outlined' className='add-forfeit-card' sx={{ m: 2, p: 2}}>
                    <Typography variant='h5'>Add Forfeit</Typography>
                    <AddForfeitCard />
                </Card>


            </div>
        </>
    )
}
