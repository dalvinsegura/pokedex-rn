import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, Button, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokemenArray = [];

          response.map(async (id) => {
            const pokemonDetails = await getPokemonDetailsByIdApi(id);

            pokemenArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
            setPokemons(pokemenArray);
          });
        })();
      }
    }, [auth])
  );

  return auth ? <PokemonList pokemons={pokemons} /> : <NoLogged />;
}
