import React, { useEffect } from "react";
import MapboxGL from '@react-native-mapbox-gl/maps';
import Map from "@components/map";
import FilterBarPOI from "@components/filterBarPOI";
import { Poi as PointOfIntress } from "@core/poi";

const MapScreen = () => {
  const [selected, setSelected] = React.useState("Food");
  const allPoi = PointOfIntress.allPoi();
  const getAllPoi = PointOfIntress.getAllPoi();

  useEffect(() => {
    getAllPoi()

    // Create a scoped async function in the hook
    async function requestAndroidLocationPermissions() {
      await MapboxGL.requestAndroidLocationPermissions()
    }
    requestAndroidLocationPermissions()
  }, []);

  return (
    <>
      <FilterBarPOI selected={selected} setSelected={setSelected} />
      <Map filteredPOIs={allPoi.filter(poi => poi.type === selected)} />
    </>
  );
};

export default MapScreen;
