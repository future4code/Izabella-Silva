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
            alert("Erro, tente mais tarde")
        })
    }, [])

    return data
}

export default GetTrips