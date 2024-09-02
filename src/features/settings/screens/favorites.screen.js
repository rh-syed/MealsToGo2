import { TouchableOpacity, View } from "react-native";
import {
  AndroidAdjustedSafeAreaView,
  RestaurantList,
} from "../../restaurants/styles/restaurants.screen.styles";
import { useContext } from "react";
import { FavouritesContext } from "../../../services/favorites/favorites.context";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { RESTAURANTS_DETAILS } from "../../../infrastructure/navigation/navigation.keys";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Text as TypoGraphyText } from "../../../components/typography/typography.component";
import { FadeInView } from "../../../components/animations/fade.animation";

export const FavoritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  console.log(favourites.length == 0);
  return (
    <AndroidAdjustedSafeAreaView>
      {favourites.length == 0 ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <TypoGraphyText variant="label">No Favorites Added</TypoGraphyText>
        </View>
      ) : (
        <RestaurantList
          data={favourites}
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
                <FadeInView>
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </FadeInView>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </AndroidAdjustedSafeAreaView>
  );
};
