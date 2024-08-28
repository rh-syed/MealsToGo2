import { Searchbar } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components";
import { View } from "react-native";
import { theme } from "../../../infrastructure/theme";

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 999;
    top: 40px;
    width: 100%;
  `;

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        value={searchKeyword}
        icon="map"
        style={{
          backgroundColor: theme.colors.ui.quaternary,
          shadowOffset: 10,
        }}
      />
    </SearchContainer>
  );
};
