import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/navigation/Navigation";
import PokemonNavigation from "./src/navigation/Pokemon.navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
