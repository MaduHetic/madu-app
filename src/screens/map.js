import React, { useEffect } from "react";
import Map from "@components/map";
import FilterBarPOI from "@components/filterBarPOI";

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
    type: "RESTAURANT"
  },
  {
    name: "LA FONTAINE",
    coordinate: [2.4183733, 48.85116281],
    type: "RESTAURANT"
  },
  {
    name: "STREET WOK",
    coordinate: [2.4161846, 48.85116282],
    type: "RESTAURANT"
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

const MapScreen = () => {
  // const getPoi = Poi.getAllPoi();
  const [selected, setSelected] = React.useState("RESTAURANT");

  useEffect(() => {
    // getPoi();

  }, []);

  return (
    <>
      <FilterBarPOI selected={selected} setSelected={setSelected}/>
      <Map filteredPOIs={fakeData.filter(poi => poi.type === selected)} />
    </>
  );
};

export default MapScreen;
