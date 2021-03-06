import React, { useEffect } from "react";
import { Platform } from "react-native";
import MapboxGL from '@react-native-mapbox-gl/maps';
import Map from "@components/map";
import FilterBarPOI from "@components/filterBarPOI";
import { Poi as PointOfIntress } from "@core/poi";

const MapScreen = ({route}) => {
  const [selected, setSelected] = React.useState("Food");
  const allPoi = PointOfIntress.allPoi();
  const getAllPoi = PointOfIntress.getAllPoi();

  useEffect(() => {
    getAllPoi()

    // Create a scoped async function in the hook
    async function requestAndroidLocationPermissions() {
      await MapboxGL.requestAndroidLocationPermissions()
    }

    if (Platform.OS === "android") requestAndroidLocationPermissions()
  }, []);

  useEffect(() => {
    if (route?.params?.POIType && route?.params?.POIType !== selected) {
      setSelected(route?.params?.POIType)
    }
  }, [route])

  return (
    <>
      <FilterBarPOI selected={selected} setSelected={setSelected} />
      <Map
        filteredPOIs={allPoi.filter(poi => poi.type === selected)}
        POIFromList={allPoi.filter(poi => poi.id === route?.params?.POIID)[0]}
      />
    </>
  );
};

export default MapScreen;
