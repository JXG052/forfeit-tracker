import { useState } from 'react'
import './Home.css'
import GetData from "../components/GetData";


export default function Home({info}) {
    const [data, setData] = useState(info)
    return (
        <>
            <div className='home-page'>
                <h1>
                    The Golf Group
                </h1>
                {/* <GetData info={info} /> */}
                
                {/* <button className='main-button'>Forfeits</button> */}
            </div>
        </>
    )
}
