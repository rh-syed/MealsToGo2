import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantsNavigator } from "./restaurants.navigation";
import { MAP_TAB, RESTAURANT_TAB, SETTINGS_TAB } from "./navigation.keys";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { RestaurantContextProvider } from "../../services/restaurant/restaurants.context";
import { FavouritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

export const AppNavigation = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name={RESTAURANT_TAB}
              component={RestaurantsNavigator}
            />
            <Tab.Screen name={MAP_TAB} component={MapScreen} />
            <Tab.Screen name={SETTINGS_TAB} component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
