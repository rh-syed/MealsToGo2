import React from "react";
import { Image, Platform, View } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components";
import { Text as TypoGraphyText } from "../../../components/typography/typography.component";

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <TypoGraphyText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </TypoGraphyText>
    </Item>
  );
};
