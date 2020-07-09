import React, { useEffect } from "react";
import MapboxGL from '@react-native-mapbox-gl/maps';
import Map from "@components/map";
import FilterBarPOI from "@components/filterBarPOI";
import { Poi as PointOfIntress } from "@core/poi";

import { Poi } from "@core/poi";

const fakeData = [
  {
    name: "HÉTIC",
    coordinate: [2.4182711, 48.8518269],
    type: "MAGASIN"
  },
  {
    name: "BIRDIES",
    coordinate: [2.4179543, 48.8510702],
    type: "Food"
  },
  {
    name: "LA FONTAINE",
    coordinate: [2.4183733, 48.85116281],
    type: "Food"
  },
  {
    name: "STREET WOK",
    coordinate: [2.4161846, 48.85116282],
    type: "Food"
  },
  {
    name: "BNP PARIBAS",
    coordinate: [2.4161846, 48.85116283],
    type: "ACTIVITÉ"
  },
  {
    name: "LA POSTE",
    coordinate: [2.4181265, 48.8516005],
    type: "ACTIVITÉ"
  },
]

const entrepriseFake = {
  coordinate: [2.425848, 48.8526156]
}

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
      <Map 
        filteredPOIs={allPoi.filter(poi => poi.type === selected)}
        entreprise={entrepriseFake}
      />
    </>
  );
};

export default MapScreen;
