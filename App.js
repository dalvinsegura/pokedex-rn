import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/navigation/Navigation";
import PokemonNavigation from "./src/navigation/Pokemon.navigation";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
