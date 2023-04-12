import React, { useState } from 'react'
import PlayerCountTable from '../components/PlayerCountTable'
import GetData from '../components/GetData'
import { Card, Typography } from '@mui/material'
import './ForfeitTracker.css'
import { spacing } from '@mui/system';

export default function ForfeitTracker(props) {
  const [info , setInfo] = useState(props.data)
  function runLog() {
    console.log(info)
  }
  return (
    <div>
      <Card variant='outlined' className='dataCard' sx={{ m: 10, p: 10}}>
      <Typography variant='h3'>Total Forfeits</Typography>
      <GetData info={info}/>
      </Card>
    </div>  
  )
}
