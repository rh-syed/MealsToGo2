import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <View style={styles.listView}>
          <RestaurantInfoCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "row",
  },
  searchView: {
    flex: 0.1,
    padding: 16,
  },
  listView: {
    flex: 0.9,
    backgroundColor: "red",
    padding: 16,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
