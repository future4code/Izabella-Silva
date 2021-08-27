import axios from 'axios'
import { useEffect, useState } from 'react'

const GetPokemonDetails = (props) => {
    const[pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`${props.url}`)
        .then((response) =>{
            setPokemon(response.data)
        })
        .catch((error) =>{
            console.log(error.response)
        })
    },[])

    return pokemon
}

export default GetPokemonDetails