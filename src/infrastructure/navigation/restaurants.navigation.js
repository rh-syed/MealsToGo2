import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import { RESTAURANTS_DETAILS, RESTAURANTS_SCREEN } from "./navigation.keys";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant.details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name={RESTAURANTS_SCREEN}
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name={RESTAURANTS_DETAILS}
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
