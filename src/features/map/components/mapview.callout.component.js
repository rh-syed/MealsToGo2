import React from "react";
import { Image, Text, View } from "react-native";
import { CompactRestaurantInfo } from "../../restaurants/components/compact-restaurant-info.component";

export const MapCalloutView = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
