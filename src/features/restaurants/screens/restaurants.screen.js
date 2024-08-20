import React, { useState } from "react";
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
          <RestaurantList
            data={[
              { name: 1 },
              { name: 3 },
              { name: 4 },
              { name: 5 },
              { name: 6 },
              { name: 7 },
              { name: 8 },
              { name: 9 },
              { name: 10 },
              { name: 11 },
            ]}
            keyExtractor={(item) => item.name}
            renderItem={() => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
            )}
          />
        </ListViewContainer>
      </RestaurantContainer>
    </AndroidAdjustedSafeAreaView>
  );
};
