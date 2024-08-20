import React from "react";
import { Image } from "react-native";
import {
  OpenXML,
  RatingOpenContainer,
  RatingXML,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantCardInfoView,
  Section,
  SectionEnd,
} from "../styles/restaurant.info.card.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text as TypoGraphyText } from "../../../components/typography/typography.component";
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
        <TypoGraphyText variant="label">{name}</TypoGraphyText>
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
                <TypoGraphyText variant="error">
                  CLOSED TEMPORARILY
                </TypoGraphyText>
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Image source={{ uri: icon }} width={20} height={20} />
            </Spacer>
          </SectionEnd>
        </Section>
        <TypoGraphyText variant="caption">{address}</TypoGraphyText>
      </RestaurantCardInfoView>
    </RestaurantCard>
  );
};
