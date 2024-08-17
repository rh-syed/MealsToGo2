import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  border-radius: ${(props) => props.theme.space[0]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  borderradius: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RestaurantCardTitle = styled(Card.Title)`
  padding: ${(props) => props.theme.space[2]};
`;
