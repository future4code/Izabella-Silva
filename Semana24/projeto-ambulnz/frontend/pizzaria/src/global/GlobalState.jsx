import React, { useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) => {
    const[cart, setCart] = useState([])

    const addPizzaToCart = (pizza) => {
        const newCart = cart
        newCart.push(pizza)
        setCart(newCart)
    }

    const removePizzaToCart = (pizzaId) => {
        const newCart = cart
        newCart.forEach((pizza, index) => {
            if(pizza.id === pizzaId ){
                newCart.slice(index, 1)
            }
        })
        setCart(newCart)
    }

    useEffect(() => {
        addPizzaToCart()
    }, [cart])

    const getCart = () => {
        return cart
    }

    return(
        <GlobalStateContext.Provider value={{cart, setCart, addPizzaToCart, removePizzaToCart, getCart}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState