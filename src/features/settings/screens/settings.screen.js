import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AndroidAdjustedSafeAreaView } from "../../restaurants/styles/restaurants.screen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <AndroidAdjustedSafeAreaView>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </AndroidAdjustedSafeAreaView>
  );
};
