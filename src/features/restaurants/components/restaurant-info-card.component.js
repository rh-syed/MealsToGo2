import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import {
  RestaurantCard,
  RestaurantCardAddress,
  RestaurantCardCover,
  RestaurantCardInfoView,
  RestaurantCardTitle,
} from "../styles/restaurant.info.card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardInfoView>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </RestaurantCardInfoView>
    </RestaurantCard>
  );
};
