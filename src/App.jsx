import React, { useEffect, useState } from 'react'
import { getDataLauches, getLaunchByFlightNumer } from './services/launches'

export const App = () => {

    const [launches, setLaunches] = useState([])
    useEffect(() => {
        getDataLauches().then(setLaunches)
    }, [])
    console.log(launches);
        
    return (
        <>
        <h1>SpaceX Launches</h1>
        <ul>
            {launches.map(launch => (
                <li key={launch.mission_id}>{launch.mission_name} ({launch.launch_year})</li>
            ))}
        </ul>
        </>
    )
}
