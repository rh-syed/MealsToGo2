import React, { useContext, useState } from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  AndroidAdjustedSafeAreaView,
  ListViewContainer,
  RestaurantActivityIndicator,
  RestaurantContainer,
  RestaurantList,
  RestaurantLoadingIndicatorView,
  SearchContainer,
} from "../styles/restaurants.screen.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RESTAURANTS_DETAILS } from "../../../infrastructure/navigation/navigation.keys";
import { FavoriteBar } from "../../../components/favorites/favorite-bar.component";
import { FavouritesContext } from "../../../services/favorites/favorites.context";

export const RestaurantsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouriteToggled, setFavouriteToggled] = useState(false);
  return (
    <AndroidAdjustedSafeAreaView>
      <RestaurantContainer>
        <Search
          isFavouritesToggled={isFavouriteToggled}
          onFavouritesToggle={() => setFavouriteToggled(!isFavouriteToggled)}
        />
        {isFavouriteToggled && (
          <FavoriteBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <ListViewContainer>
          <RestaurantLoadingIndicatorView>
            {isLoading && <RestaurantActivityIndicator />}
          </RestaurantLoadingIndicatorView>
          <RestaurantList
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(RESTAURANTS_DETAILS, {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
          />
        </ListViewContainer>
      </RestaurantContainer>
    </AndroidAdjustedSafeAreaView>
  );
};
