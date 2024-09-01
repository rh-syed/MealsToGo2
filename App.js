import { ThemeProvider } from "styled-components";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";
import { FavouritesContextProvider } from "./src/services/favorites/favorites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FIREBASE_APP } from "./src/utils/firebase.config";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  FIREBASE_APP;
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
