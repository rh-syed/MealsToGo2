import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <Text> Search Bar </Text>
        </View>
        <View style={styles.listView}>
          <Text> List View </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "row",
    backgroundColor: "orange",
  },
  searchView: {
    flex: 0.1,
    backgroundColor: "blue",
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
