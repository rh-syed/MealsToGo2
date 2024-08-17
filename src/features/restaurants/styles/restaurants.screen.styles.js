import React from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import styled from "styled-components";

export const RestaurantContainer = styled(View)`
  flex: 1;
  direction: "row";
`;

export const SearchContainer = styled(View)`
  flex: 0.1;
  padding: ${(props) => props.theme.space[3]};
`;

export const ListViewContainer = styled(View)`
  flex: 0.9;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;

export const AndroidAdjustedSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
