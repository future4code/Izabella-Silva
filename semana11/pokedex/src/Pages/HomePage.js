import React from 'react'
import GetPokemons from '../Hooks/GetPokemons'
import CardPokemon from '../Components/Cards/CardPokemon'

const HomePage = () => {
    const pokemons = GetPokemons()

    const allPokemons = (pokemons.map((pokemon) => {
        return(
            <CardPokemon url={pokemon.url}/>
        )

    }))


    return(
        <div>
            {allPokemons}
        </div>
    )
}

export default HomePage