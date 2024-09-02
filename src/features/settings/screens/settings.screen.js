import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AndroidAdjustedSafeAreaView } from "../../restaurants/styles/restaurants.screen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FAVORITES_SCREEN } from "../../../infrastructure/navigation/navigation.keys";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <AndroidAdjustedSafeAreaView>
      <AvatarContainer>
        <Avatar.Icon size={90} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate(FAVORITES_SCREEN)}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </AndroidAdjustedSafeAreaView>
  );
};
