import { View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantCard = styled(Card).attrs({
  elevation: 5,
})`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  border-radius: ${(props) => props.theme.space[0]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  borderradius: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RestaurantCardInfoView = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RatingOpenContainer = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RatingXML = styled(SvgXml).attrs({
  width: 20,
  height: 20,
  xml: star,
})``;

export const OpenXML = styled(SvgXml).attrs({
  width: 20,
  height: 20,
  xml: open,
})`
  flex-direction: row;
`;
