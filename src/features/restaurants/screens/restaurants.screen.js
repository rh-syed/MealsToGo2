import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  AndroidAdjustedSafeAreaView,
  ListViewContainer,
  RestaurantContainer,
  RestaurantList,
  SearchContainer,
} from "../styles/restaurants.screen.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/restaurants.context";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
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
          <RestaurantList
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              );
            }}
          />
        </ListViewContainer>
      </RestaurantContainer>
    </AndroidAdjustedSafeAreaView>
  );
};
