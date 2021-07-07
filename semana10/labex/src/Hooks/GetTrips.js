import { useEffect, useState } from 'react'
import axios from 'axios'

const GetTrips = (url, initialState) => {
    const[data,setData] = useState(initialState)

    useEffect(() => {
        axios.get(url)
        .then((response) =>{
            setData(response.data.trips)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }, [])

    console.log("getTrips", data)

    return data
}

export default GetTrips