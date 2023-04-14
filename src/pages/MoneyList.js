import React, { useState } from 'react'
import MoneyListTable from '../components/MoneyListTable'

export default function MoneyList({info}) {
  const [data] = useState(info)

  return (
    <div>
      <MoneyListTable info={data} />
    </div>
  )
}
