import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from 'axios'

const GlobalState = (props) => {
    const[pizzas, setPizzas] = useState()

    const getPizzas = () => {
        axios.get(`${BASE_URL}/pizza/get`)
        .then((res) => {
            setPizzas(res.data.message) 
        }).catch((error) => {
            console.log(error.data)
            window.alert('Erro ao realizar solicitação.\n Tente novamente.')
        })
    }

    return(
        <GlobalStateContext.Provider value={{getPizzas, pizzas}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState