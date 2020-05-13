import React, { useEffect } from "react";
import Map from "@components/map";

import { Poi } from "@core/poi";

const MapScreen = () => {
  const getPoi = Poi.getAllPoi();
  useEffect(() => {
    getPoi();
  }, []);
  return <Map />;
};

export default MapScreen;
