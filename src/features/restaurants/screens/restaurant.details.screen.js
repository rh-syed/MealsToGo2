import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { List } from "react-native-paper";
import { AndroidAdjustedSafeAreaView } from "../styles/restaurants.screen.styles";
import { theme } from "../../../infrastructure/theme";

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const [breakFastExpanded, setBreakFastExpanded] = React.useState(false);
  const [lunchExpanded, setlunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  const handleBreakFast = () => setBreakFastExpanded(!breakFastExpanded);
  const handleDinner = () => setDinnerExpanded(!dinnerExpanded);
  const handleLunch = () => setlunchExpanded(!lunchExpanded);
  const handleDrinks = () => setDrinksExpanded(!drinksExpanded);
  return (
    <AndroidAdjustedSafeAreaView>
      <Spacer size="large">
        <RestaurantInfoCard restaurant={restaurant} />
      </Spacer>

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          color={theme.colors.brand.secondary}
          left={(props) => (
            <List.Icon
              {...props}
              icon="bread-slice"
              color={theme.colors.brand.secondary}
            />
          )}
          expanded={breakFastExpanded}
          onPress={handleBreakFast}
        >
          <List.Item title="Eggs" />
          <List.Item title="Toast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food"
              color={theme.colors.brand.secondary}
            />
          )}
          expanded={lunchExpanded}
          onPress={handleLunch}
          color="red"
        >
          <List.Item title="Eggs" />
          <List.Item title="Toast" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon
              {...props}
              icon="silverware-fork-knife"
              color={theme.colors.brand.secondary}
            />
          )}
          expanded={dinnerExpanded}
          onPress={handleDinner}
          color="red"
        >
          <List.Item title="Eggs" />
          <List.Item title="Toast" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-fork-drink"
              color={theme.colors.brand.secondary}
            />
          )}
          expanded={drinksExpanded}
          onPress={handleDrinks}
          color="red"
        >
          <List.Item title="Eggs" />
          <List.Item title="Toast" />
        </List.Accordion>
      </ScrollView>
    </AndroidAdjustedSafeAreaView>
  );
};
