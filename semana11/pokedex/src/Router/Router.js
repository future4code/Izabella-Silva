import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage'
import PokemonDetails from '../Pages/PokemonDetails'
import PokedexPage from '../Pages/PokedexPage';
import Header from '../Components/Header/Header';

const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/pokemondetails/:name">
                    <PokemonDetails/>
                </Route>
                <Route exact path="/pokedexpage">
                    <PokedexPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router