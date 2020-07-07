import React, { Fragment, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Color } from "@glossy/colors";
import Building from "@assets/images/Building.png";
import cross from "@assets/images/cross.png";
import BottomSheet from "reanimated-bottom-sheet";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    // backgroundColor: "rgba(0, 0, 0, .1)",
    height: 40,
    width: 40,
  },
  markerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  markerDot: {
    backgroundColor: Color.primary,
    width: 12,
    height: 12,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  markerText: {
    textTransform: "lowercase",
    color: Color.primary,
    position: "absolute",
    bottom: 0,
  },
  markerEntrepriseContainer: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "relative",
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  markerDotEntreprise: {
    backgroundColor: Color.black,
    width: 12,
    height: 12,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    borderColor: Color.white,
    borderWidth: 2,
  },
  buildingEntreprise: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 45,
    height: 45,
    position: "absolute",
    right: 0,
  },
});

const Map = ({ filteredPOIs, entreprise }) => {
  const mapEl = useRef(null);
  const bottomSheetRef = useRef(null);
  const annotationRef = useRef(null);
  const [filteredPOIsState, setFilteredPOIsState] = React.useState([]);
  const [currPOI, setCurrPOI] = React.useState(null);
  const [isZoomAbove15, setIsZoomAbove15] = React.useState(true);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);

    // To get past a certain bug, need improvment
    setFilteredPOIsState([]);
    setTimeout(() => {
      setFilteredPOIsState(filteredPOIs);
    }, 1);
  }, [filteredPOIs]);

  useEffect(() => {
  }, [isZoomAbove15]);

  const handleClickPOI = (poi) => {
    setCurrPOI(poi);
    bottomSheetRef.current.snapTo(1);
  };

  const handleZoomChanged = e => {
    setIsZoomAbove15(e > 15)
  }

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView
            ref={mapEl}
            styleURL="mapbox://styles/mapbox/streets-v9"
            style={styles.map}
            onDidFailLoadingMap={() => console.log("failed")}
            onTouchMove={() => mapEl.current.getZoom().then(e => handleZoomChanged(e))}
          >
            <MapboxGL.UserLocation visible={true} showsUserHeadingIndicator={true} />

            <MapboxGL.Camera
              defaultSettings={{
                centerCoordinate: [2.4182711, 48.8518269],
                zoomLevel: 13.4,
              }}
              followUserLocation={true}
              followUserMode={"normal"}
            />

            {/* POIS */}
            {filteredPOIsState &&
              filteredPOIsState.map((poi, i) => (
                <Fragment key={i}>
                  {/* MarkerView to add onPress event */}
                  <MapboxGL.MarkerView coordinate={poi.coordinate}>
                    <TouchableOpacity
                      onPress={() => handleClickPOI(poi)}
                      style={styles.markerView}
                    />
                  </MapboxGL.MarkerView>

                  {/* PointAnnotation - UI */}
                  <MapboxGL.PointAnnotation
                    coordinate={poi.coordinate}
                    id={`PointAnnotation_${i}`}
                  >
                    <View style={styles.markerContainer}>
                      <View style={styles.markerDot} />
                        <Text style={isZoomAbove15 ? styles.markerText : {}}>{isZoomAbove15 ? poi.name : ""}</Text>
                    </View>
                  </MapboxGL.PointAnnotation>
                </Fragment>
              ))}

            {/* ENTREPRISE */}
            <MapboxGL.PointAnnotation
              title="entreprisetite"
              coordinate={entreprise.coordinate}
              id="entreprise"
              ref={annotationRef}
            >
              <View style={styles.markerEntrepriseContainer}>
                <View style={styles.markerDotEntreprise} />
                <Image
                  source={Building}
                  style={styles.buildingEntreprise}
                  onLoad={() => annotationRef.current.refresh()}
                />
              </View>
            </MapboxGL.PointAnnotation>
          </MapboxGL.MapView>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["87%", 220, 0]}
        initialSnap={2}
        renderContent={() => (
          <View style={{ backgroundColor: Colors.white, position: "relative" }}>
            <TouchableOpacity
              onPress={() => bottomSheetRef.current.snapTo(2)}
              style={{ width: "95%", display: "flex", alignItems: "flex-end" }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F5F5FA",
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={cross} />
              </View>
            </TouchableOpacity>

            <Text style={{ fontSize: 26, margin: 10 }}>{currPOI?.name}</Text>

            <Text style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <Text style={{ margin: 10 }}>FIN</Text>
          </View>
        )}
        renderHeader={() => (
          <View style={{ width: "100%", height: 20, backgroundColor: "white" }} />
        )}
      />
    </>
  );
};

export default Map;
