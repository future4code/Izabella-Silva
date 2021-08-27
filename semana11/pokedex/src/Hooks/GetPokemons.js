import axios from 'axios'
import { useEffect, useState } from 'react'

const GetPokemons = () => {
    const[data, setdata] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        .then((response) => {
            setdata(response.data.results)
        }).catch((error) => {
            console.log(error.response)
        })
    }, [])
    

    return data
}

export default GetPokemons