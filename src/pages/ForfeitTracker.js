import React, { useState } from 'react'
import PlayerCountTable from '../components/PlayerCountTable'
import GetData from '../components/GetData'
import { Card } from '@mui/material'
import './ForfeitTracker.css'

export default function ForfeitTracker(props) {
  const [info , setInfo] = useState(props.data)
  function runLog() {
    console.log(info)
  }
  return (
    <div>
      <Card variant='outlined' className='dataCard'>

      <GetData info={info}/>
      </Card>
    </div>  
  )
}
