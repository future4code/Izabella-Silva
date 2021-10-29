import { Button } from "@material-ui/core"
import { useContext } from "react"
import { useHistory } from "react-router"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { goToCard } from "../../routes/cordinator"

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const {addPizzaToCart} = useContext(GlobalStateContext)
    const pizzas = useRequestData([], "/pizza/get")

    const listPizzas = pizzas?.map((pizza) =>{
        return(
            <div key={pizza.id}>
                <div>
                    <p>Nome:{pizza.name}</p>
                    <p>Preço:{pizza.price}</p>
                    <p>Ingredientes: {pizza.ingredients.map((ingredient) => {
                        return(
                            <p>{ingredient}</p>
                        )
                    })}</p>
                </div>
                <Button
                    variant="text"
                    color="primary"
                    type={"submit"}
                    fullWitdth
                    margin={'normal'}
                    onClick={() => addPizzaToCart(pizza)}
                >
                    Adicionar
                </Button>
            </div>
        )
    })

    
    return(
        <div>
            {listPizzas}
        </div>
    )
}

export default FeedPage