import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";

const Tela = styled.div`
font-family: roboto;
text-align: center;
`

function App() {

  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => {
      setPokeList(response.data.results)
      console.log(response.data.results)
    })

    .catch((err)=> {
      console.log(err.response.data.message)
    })
    
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  const pokeOptions = pokeList.map((pokemon) =>{
    return(
      <option key = {pokemon.name} value = {pokemon.name}>
        {pokemon.name}
      </option>        
    )
  })
  // Passo 4a
  const pokemon = pokeName && <PokeCard pokemon={pokeName} />;

  return (
    <Tela>
      <header>
        <h1>Quem é esse Pokémon?</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um Pokémon: </label>
        <select id={"select-pokemon"} onChange={changePokeName} >
          <option value={""}>Nenhum</option>
            {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </Tela>
  );
};

export default App;
