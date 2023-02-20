import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReLoadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReLoadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReLoadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        solid={isFavorite}
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{ marginRight: 20 }}
      />
    </View>
  );
}
