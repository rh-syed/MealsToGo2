import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  CAMERA_SCREEN,
  FAVORITES_SCREEN,
  SETTINGS_SCREEN,
  SETTINGS_TAB,
} from "./navigation.keys";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={CAMERA_SCREEN} component={CameraScreen} />
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen name={FAVORITES_SCREEN} component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
