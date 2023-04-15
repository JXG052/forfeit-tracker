import React, { useState } from 'react'
import MoneyListTable from '../components/MoneyListTable'
import { Typography } from '@mui/material'

export default function MoneyList({info}) {
  const [data] = useState(info)

  return (
    <div>
      <MoneyListTable info={data} />
      <Typography variant='p' color='grey'>FedEx points are calculated each week based on your performance in any given competition. 100pts for 1st place, 1pt for 100th place</Typography>
    </div>
  )
}
