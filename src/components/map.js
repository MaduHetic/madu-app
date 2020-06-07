import React, { useEffect, useRef } from "react";
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
  marker: {
    backgroundColor: Color.primary,
    width: 10,
    height: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AnnotationContent = ({title}) => (
  <View style={{
      borderColor: 'black',
      borderWidth: 1.0,
      width: 60
    }}>
    <Text>{title}</Text>
    <TouchableOpacity
    onPress={() => console.log("oui")}
      style={{
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100000
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
        }}>
        Btn
      </Text>
    </TouchableOpacity>
  </View>
);

const MarkerViewAnnotation = () => (
  <TouchableOpacity
    onPress={() => console.log("oui")}
    style={styles.marker}
  />
)

const Map = ({filteredPOIs}) => {
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
          // onRegionDidChange={(e) => console.log(e)}
        >
          {/* <MapboxGL.Camera
            zoomLevel={13.4}
            centerCoordinate={[2.4182711, 48.8518269]}
            maxBounds={{
              ne: [2.4192711, 48.8528269],
              sw: [2.4172711, 48.8508269],
            }}
          /> */}
          {/* <MapboxGL.UserLocation
            visible={true}
            showsUserHeadingIndicator={true}
          /> */}
          {/* <MapboxGL.PointAnnotation
            coordinate={[2.4182711, 48.8518269]}
            id="pt-ann"
          >
            <AnnotationContent title={'this is a point annotation'} />
          </MapboxGL.PointAnnotation> */}

          {filteredPOIs && filteredPOIs.map((poi, i) => (
            <MapboxGL.MarkerView coordinate={poi.coordinate} key={i}>
              <MarkerViewAnnotation />
            </MapboxGL.MarkerView>
          ))}

        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default Map;
