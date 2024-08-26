import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
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
  padding: ${(props) => props.theme.space[3]};
`;

export const AndroidAdjustedSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {},
})`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RestaurantLoadingIndicatorView = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const RestaurantActivityIndicator = styled(ActivityIndicator).attrs(
  (props) => ({
    animating: true,
    size: "large",
    color: props.theme.colors.brand.primary,
  })
)``;
