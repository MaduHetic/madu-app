import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoibWV0YWxtYW5pbmZyIiwiYSI6ImNqdjI5bzRsYjBxOXQ0ZXA5dmpsNDNkeGcifQ.luP93CEITntYfy6fZmCLOw",
);

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F5FCFF",
    height: "100%",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

const Map = () => {
  const mapEl = useRef(null);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={mapEl}
          styleURL="mapbox://styles/mapbox/streets-v9"
          style={styles.map}
          onDidFailLoadingMap={() => console.log("failed")}
          onRegionDidChange={(e) => console.log(e)}
        >
          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={[2.36, 48.858]}
            maxBounds={{
              ne: [2.48, 48.9029],
              sw: [2.23, 48.8135],
            }}
          />
          <MapboxGL.UserLocation
            renderMode="normal"
            androidRenderMode="compass"
            visible={true}
          />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default Map;
