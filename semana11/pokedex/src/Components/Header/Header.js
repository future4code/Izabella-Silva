import React from 'react'
import {ContainerHeader} from "../../styled/HeaderStyled"
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()

    const changePage = () =>{
        history.push("/pokedexpage")
    }

    return(
        <ContainerHeader>
            <button onClick={changePage}>Pokedex</button>
            <h1>Pokedex</h1>
        </ContainerHeader>
    )
}

export default Header