import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/FontAwesome5";

import AccountScreen from "../screens/Account.screen";
import PokedexScreen from "../screens/Pokedex.screen";
import FavoriteScreen from "../screens/Favorite.screen";
import PokemonNavigation from "./Pokemon.navigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="PokemonNavigation">
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="PokemonNavigation"
        component={PokemonNavigation}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => renderPokeBall(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Cuenta",
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
