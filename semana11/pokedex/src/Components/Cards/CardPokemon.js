import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
// import GetPredominatColor from '../../Hooks/GetPredominatColor'
import {ContaineCads} from '../../styled/Cads'
import GetPokemonDetails from '../../Functions/GetPokemonDetails'

const CardPokemon = (props) => {
    // const pokemon = GetPokemonDetails(props.url)
    const history = useHistory()
    const[pokemon, setPokemon] = useState({})
    const[predominantColor, setPredominantColor] = useState("")

    useEffect(()=>{
        axios.get(`${props.url}`)
        .then((response) =>{
            setPokemon(response.data)
        })
        .catch((error) =>{
            console.log(error.response)
        })
    },[])

    const goToPokemonDetails = () => {
        history.push()
    }

    // if(pokemon.sprites && pokemon.sprites.front_default){
    //     setPredominantColor(GetPredominatColor(pokemon.sprites.front_default))
    // }

    // const predominantColor = GetPredominatColor(pokemon.sprites.front_default)
    // style={{backgroundColor: predominantColor}

    return(
    <ContaineCads style={{backgroundColor: predominantColor}} key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <div id="containerImg">
                {pokemon.sprites && pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} alt={pokemon.name}/>}
            </div>
            <div id="containerButtons">
                <button className="buttons">Adicionar a Pokedex</button>
                <button className="buttons" onClick={goToPokemonDetails}>Detalhar</button>
        </div>
    </ContaineCads>)
}

export default CardPokemon