import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from "../../../infrastructure/navigation/navigation.keys";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          style={{ flex: 1 }}
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate(LOGIN_SCREEN)}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate(REGISTER_SCREEN)}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
