import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components";
import { MapSearch } from "../components/mapsearch.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurants.context";
import { Text, View } from "react-native";
import { MapCalloutView } from "../components/mapview.callout.component";
import { RESTAURANTS_DETAILS } from "../../../infrastructure/navigation/navigation.keys";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;

    setLatDelta(northEastLat - southWestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate(RESTAURANTS_DETAILS, { restaurant })
                }
              >
                <MapCalloutView restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
