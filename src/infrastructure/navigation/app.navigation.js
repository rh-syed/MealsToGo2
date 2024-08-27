import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantsNavigator } from "./restaurants.navigation";
import { MAP_TAB, RESTAURANT_TAB, SETTINGS_TAB } from "./navigation.keys";

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
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
}

function MapsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Maps</Text>
    </View>
  );
}
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name={RESTAURANT_TAB} component={RestaurantsNavigator} />
        <Tab.Screen name={MAP_TAB} component={MapsScreen} />
        <Tab.Screen name={SETTINGS_TAB} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
