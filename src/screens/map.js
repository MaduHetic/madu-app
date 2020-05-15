import React, { useEffect } from "react";
import Map from "@components/map";
import FilterBarPOI from "@components/filterBarPOI";

import { Poi } from "@core/poi";

const MapScreen = () => {
  const getPoi = Poi.getAllPoi();
  useEffect(() => {
    getPoi();
  }, []);
  return (
    <>
      <FilterBarPOI />
      <Map />
    </>
  );
};

export default MapScreen;
