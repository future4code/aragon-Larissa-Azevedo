import axios from "axios";
import PokeCard from "./components/PokeCard";

function App() {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.

  // Passo 3c
  // componentDidMount = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //     .then((res) => {
  //       this.setState({ pokeList: res.data.results });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Passo 3a
  const changePokeName = (event) => {
    // Passo 3d
    // Implementa a função aqui.
  };

  // Passo 3e
  // const pokeOptions = this.state.pokeList.map(pokemon => {
  //   return (
  //     <option key={pokemon.name} value={pokemon.name}>
  //       {pokemon.name}
  //     </option>
  //   );
  // });

  // Passo 4a
  const pokemon = true && <PokeCard />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {/* Passo 3a */}
        <select id={"select-pokemon"} >
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {/* {pokeOptions} */}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
