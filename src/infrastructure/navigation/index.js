import React, { useContext } from "react";
import { AppNavigation } from "./app.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigation";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
