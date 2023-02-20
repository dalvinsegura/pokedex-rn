import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite.screen";
import PokemonScreen from "../screens/Pokemon.screen";
import PokedexNavigation from "./Pokemon.navigation";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteNavigation"
        component={FavoriteScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PokedexNavigation"
        component={PokedexNavigation}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
