import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Text as TypoGraphyText } from "../typography/typography.component";
import { Spacer } from "../spacer/spacer.component";
import { RESTAURANTS_DETAILS } from "../../infrastructure/navigation/navigation.keys";
import { CompactRestaurantInfo } from "../../features/restaurants/components/compact-restaurant-info.component";

const FavouritesWrapper = styled(View)`
  padding: 10px;
`;
export const FavoriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <TypoGraphyText variant="caption">Favourites</TypoGraphyText>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate(RESTAURANTS_DETAILS, {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
