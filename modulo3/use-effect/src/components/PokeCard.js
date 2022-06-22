import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {

  const [currentPokemon, setCurrentPokemon] = useState({})


  useEffect(()=>{
    pegaPokemon(props.pokemon)
  }, [props.pokemon]);
 console.log(currentPokemon)
 console.log(setCurrentPokemon)
  const pegaPokemon = (pokeName) => {
    console.log("nossa, o que rolou?")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then((response)=>{
      setCurrentPokemon(response.data.results)
    })
    .catch((err)=>{
      console.log(err.response)
      console.log("O QUE??")
    });
  }; 
 console.log(PokeCard)
  // [props.pokeName];
    // Passo 4b
  // Implementa suas variáveis de estado aqui.

  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };

  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };

  // Passo 4c
  // pegaPokemon = (pokeName) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //     .then((res) => {
  //       this.setState({ pokemon: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <section>
      {/* Passo 4d */}
      <strong>{currentPokemon.name}</strong>
      {/* Passo 4d */}
      <p>{currentPokemon.weight}</p>
      {/* Passo 4d */}
      <p> {currentPokemon.types && <p>{currentPokemon.types[0].type.name}</p>}</p>
      {/* Passo 4d */}
      {currentPokemon.sprites &&( 
        <img src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
      )}
    </section>
  );
};

export default PokeCard;
