import React from 'react'
import { useHistory } from 'react-router-dom'

const GoBackButton = () => {
    const history = useHistory()

    const goback = () => {
        history.goBack()
    }

    return(
        <button onClick={goback}>Remover da Pokedex</button>
    )
}

export default GoBackButton