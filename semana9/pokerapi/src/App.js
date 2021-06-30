import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = (props) => {

  const[pokeList, setPokelist] = useState([])
  const[pokeName, setPokeName] = useState("")

  useEffect ( () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokelist(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

 const changePokeName = event => {
    setPokeName(event.target.value);
  };

    return (
      <div className="App">

        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>

        {pokeName && <PokeCard pokeName={pokeName} />}
      </div>
    );
}

export default App;
