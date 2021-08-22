import React from 'react'
import {Container} from '../../styled/Cads'
import GetPokemons from '../../Hooks/GetPokemons'
import CardPokemon from '../Cards/CardPokemon'

const Cards = () => {


    const pokemons = GetPokemons()

    const allPokemons = (pokemons.map((pokemon) => {
        return(
            <CardPokemon url={pokemon.url}/>
        )

    }))

//     const[pokemons, setPokemons] = useState([
//         {
//             name: "squirtle",
//             url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGzLq6RYTXM2_WZ_EvRi40WrPxbNIrs45G6V2xMt938AZ_d3UVRWEjIGjgIOOpVChsAI&usqp=CAU"
//         },
//         {
//             name: "Charmander",
//             url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Pok%C3%A9mon_Charmander_art.png/220px-Pok%C3%A9mon_Charmander_art.png"
//         }
// ])

//     const allPokemons = pokemons.map((pokemon) => {
//         const predominantColor = GetPredominatColor(pokemon.url)
//         return(
//             <ContaineCads style={{backgroundColor: predominantColor}}>
//                     <h2>{pokemon.name}</h2>
//                     <div id="containerImg">
//                         <img src={pokemon.url} alt={pokemon.name}/>
//                     </div>
//                     <div id="containerButtons">
//                         <button className="buttons">Adicionar a Pokedex</button>
//                         <button className="buttons">Detalhar</button>
//                 </div>
//             </ContaineCads>
//         )
//     })

    return(
        <Container>
            {allPokemons}
        </Container>
    )
}

export default Cards