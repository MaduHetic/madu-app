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
    name: "LA FONTAINE",
    coordinate: [2.4183733, 48.8511628],
    type: "RESTAURANT"
  },
  {
    name: "BIRDIES",
    coordinate: [2.4179543, 48.8510702],
    type: "RESTAURANT"
  },
  {
    name: "STREET WOK",
    coordinate: [2.4161846, 48.8511628],
    type: "RESTAURANT"
  },
  {
    name: "BNP PARIBAS",
    coordinate: [2.4161846, 48.8511628],
    type: "ACTIVITÉ"
  },
  {
    name: "LA POSTE",
    coordinate: [2.4181265, 48.8516005],
    type: "ACTIVITÉ"
  },
]

const MapScreen = () => {
  const getPoi = Poi.getAllPoi();
  const [selected, setSelected] = React.useState("RESTAURANT");
  const [filteredPOIs, setFilteredPOIs] = React.useState([])

  useEffect(() => {
    getPoi();

    setFilteredPOIs(fakeData.filter(poi => poi.type === selected));
  }, [selected]);

  return (
    <>
      <FilterBarPOI selected={selected} setSelected={setSelected}/>
      <Map filteredPOIs={filteredPOIs} />
    </>
  );
};

export default MapScreen;
