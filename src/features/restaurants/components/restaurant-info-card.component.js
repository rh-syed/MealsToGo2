import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import {
  RatingContainer,
  RestaurantCard,
  RestaurantCardAddress,
  RestaurantCardCover,
  RestaurantCardInfoView,
  RestaurantCardTitle,
} from "../styles/restaurant.info.card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardInfoView>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RatingContainer>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </RatingContainer>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </RestaurantCardInfoView>
    </RestaurantCard>
  );
};
