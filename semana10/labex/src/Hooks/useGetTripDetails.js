import axios from 'axios'
import { useEffect, useState } from 'react'
import {urlDetailTrip} from '../Config/config'

const useGetTripDetails = (id, initialState) => {
    const token = localStorage.getItem("token")

    const[data,setData] =  useState(initialState)

    useEffect(() => {
        axios.get(`${urlDetailTrip}/${id}`, {
            headers:{
                auth: token
            }
        })
        .then((response) => {
            setData(response.data.trip)
        })
        .catch((error) => {
            alert("Erro, tente novamente")
        })
    },[])

    return data

}

export default useGetTripDetails