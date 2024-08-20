import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import {
  ClosedText,
  OpenXML,
  RatingContainer,
  RatingOpenContainer,
  RatingXML,
  RestaurantCard,
  RestaurantCardAddress,
  RestaurantCardCover,
  RestaurantCardInfoView,
  RestaurantCardTitle,
  Section,
  SectionEnd,
} from "../styles/restaurant.info.card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardInfoView>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <Section>
          <RatingOpenContainer>
            {ratingArray.map(() => (
              <RatingXML />
            ))}
          </RatingOpenContainer>
          <SectionEnd>
            {isOpenNow && <OpenXML />}
            <Spacer position="left" size="large">
              {isClosedTemporarily && (
                <ClosedText>CLOSED TEMPORARILY</ClosedText>
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Image source={{ uri: icon }} width={20} height={20} />
            </Spacer>
          </SectionEnd>
        </Section>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </RestaurantCardInfoView>
    </RestaurantCard>
  );
};
