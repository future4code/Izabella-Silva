import { Button } from "@material-ui/core"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"

const FeedPage = () => {
    useProtectedPage()
    const pizzas = useRequestData([], "/pizza/get")

    const listPizzas = pizzas?.map((pizza) =>{
        return(
            <div key={pizza.id}>
                <p>Nome:{pizza.name}</p>
                <p>Preço:{pizza.price}</p>
                <p>Ingredientes: {pizza.ingredients.map((ingredient) => {
                    return(
                        <p>{ingredient}</p>
                    )
                })}</p>
                <Button
                    variant="text"
                    color="primary"
                    type={"submit"}
                    fullWitdth
                    margin={'normal'}
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