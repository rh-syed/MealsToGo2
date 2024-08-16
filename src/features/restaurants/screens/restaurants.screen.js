import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  AndroidAdjustedSafeAreaView,
  ListViewContainer,
  RestaurantContainer,
  SearchContainer,
} from "../styles/restaurants.screen.styles";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <AndroidAdjustedSafeAreaView>
      <RestaurantContainer>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <ListViewContainer>
          <RestaurantInfoCard />
        </ListViewContainer>
      </RestaurantContainer>
    </AndroidAdjustedSafeAreaView>
  );
};
