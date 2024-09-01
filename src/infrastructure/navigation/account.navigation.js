import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import {
  ACCOUNT_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from "./navigation.keys";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
