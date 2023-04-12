import React, { useState } from 'react'

import GetData from '../components/GetData'
import { Card, Typography } from '@mui/material'
import './ForfeitTracker.css'
// import { spacing } from '@mui/system';

export default function ForfeitTracker(props) {
  const [info] = useState(props.data)

  return (
    <div>
      <Card variant='outlined' className='dataCard' sx={{ m: 10, p: 10}}>
      <Typography variant='h3'>Total Forfeits</Typography>
      <GetData info={info}/>
      </Card>
    </div>  
  )
}
