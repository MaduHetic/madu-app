import React, { Fragment, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Color } from "@glossy/colors";

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
  markerView: {
    backgroundColor: "rgba(0, 0, 0, .1)",
    height: 40,
    width: 40
  },
  markerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 200
  },
  markerDot: {
    backgroundColor: Color.primary,
    width: 10,
    height: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20
  },
  markerText: {
    textTransform: "lowercase",
    color: Color.primary,
    position: "absolute",
    bottom: 0
  }
});

const Map = ({filteredPOIs}) => {
  const mapEl = useRef(null);
  const [filteredPOIsState, setFilteredPOIsState] = React.useState([])

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);

    // To get past a certain bug, need improvment
    setFilteredPOIsState([])
    setTimeout(() => {
      setFilteredPOIsState(filteredPOIs)
    }, 1)
  }, [filteredPOIs]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={mapEl}
          styleURL="mapbox://styles/mapbox/streets-v9"
          style={styles.map}
          onDidFailLoadingMap={() => console.log("failed")}
          // onRegionDidChange={(e) => console.log(e)}
        >
          <MapboxGL.Camera
            zoomLevel={13.4}
            centerCoordinate={[2.4182711, 48.8518269]}
            maxBounds={{
              ne: [2.4192711, 48.8528269],
              sw: [2.4172711, 48.8508269],
            }}
          />
          {/* <MapboxGL.UserLocation
            visible={true}
            showsUserHeadingIndicator={true}
          /> */}

          {filteredPOIsState && filteredPOIsState.map((poi, i) => (
            <Fragment key={i}>
              {/* MarkerView to add onPress event */}
              <MapboxGL.MarkerView coordinate={poi.coordinate}>
                <TouchableOpacity
                  onPress={() => console.log("nope: ", poi.name)}
                  style={styles.markerView}
                />
              </MapboxGL.MarkerView>

              <MapboxGL.PointAnnotation coordinate={poi.coordinate} id={`PointAnnotation${i}`}>
                <View style={styles.markerContainer}>
                  <View style={styles.markerDot} />
                  <Text style={styles.markerText}>{poi.name}</Text>
                </View>
              </MapboxGL.PointAnnotation>
            </Fragment>
          ))}

        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default Map;
