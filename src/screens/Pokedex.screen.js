import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";

import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nexUrl, setNexUrl] = useState(null);

  // console.log("pokemons--->", pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nexUrl);
      setNexUrl(response.next);

      const pokemenArray = [];

      response.results.map(async (pokemon) => {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemenArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
        // console.log(pokemenArray)
        setPokemons([...pokemons, ...pokemenArray]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nexUrl}
      />
    </SafeAreaView>
  );
}
