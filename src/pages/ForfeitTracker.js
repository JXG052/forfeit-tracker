import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import GetData from '../components/GetData'
import { Card, Typography } from '@mui/material'
import './ForfeitTracker.css'
import { database } from '../firebaseConfig';
// import { spacing } from '@mui/system';

export default function ForfeitTracker(props) {
  const [data, setData] = useState(null)
  const getData = async () => {
    const collectionRef = collection(database, "golfers");
    onSnapshot(collectionRef, (data) => {

      let myData = data.docs.map((item) => {
        return item.data();
      })
      setData(myData)
    })
  };
  useEffect(() => {
    getData()

  }, [data])
  // const [info] = useState(props.data)
  if (!data) {
    return (<div>loading...</div>)
  }
  return (
    <div>
      <Card variant='outlined' className='dataCard' sx={{ m: 1, p: 1}}>
      <Typography variant='h3'>Total Forfeits</Typography>
      <GetData info={data}/>
      </Card>
    </div>  
  )
}
