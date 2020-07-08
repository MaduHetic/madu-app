import React, { Fragment, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Color } from "@glossy/colors";
import Building from "@assets/images/Building.png";
import cross from "@assets/images/cross.png";
import BottomSheet from "reanimated-bottom-sheet";
import { point } from '@turf/helpers';
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import Geolocation from '@react-native-community/geolocation';
import { MAP_KEY } from "react-native-dotenv";
import svgs from "@assets/svg/sprite";
import Svg from "@components/svg";

const clientOptions = {accessToken: MAP_KEY};
const directionsClient = MapboxDirectionsFactory(clientOptions);

MapboxGL.setAccessToken(MAP_KEY);

const layerStyles = {
  route: {
    lineColor: Color.primary,
    lineCap: MapboxGL.LineJoin.Round,
    // lineDasharray: [.1, 1.2],
    lineWidth: 3
  }
};

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
    borderColor: Color.white,
    borderWidth: 2,
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
  const [route, setRoute] = React.useState(null);

  // POIs filter
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);

    // To get past a certain bug, need improvment
    setFilteredPOIsState([]);
    setTimeout(() => {
      setFilteredPOIsState(filteredPOIs);
    }, 1);
  }, [filteredPOIs]);

  // Render route layer
  const renderRoute = () => {
    if (!route) {
      return null;
    }

    return (
      <MapboxGL.ShapeSource id="routeSource" shape={route}>
        <MapboxGL.LineLayer
          id="routeFill"
          style={layerStyles.route}
          belowLayerID="originInnerCircle"
        />
      </MapboxGL.ShapeSource>
    );
  }

  // Render route origin
  const renderOrigin = () => {
    return (
      <MapboxGL.ShapeSource id="origin" shape={point([0, 0])}>
        <MapboxGL.Animated.CircleLayer id="originInnerCircle" style={{circleColor: "rgba(0, 0, 0, 0)"}} />
      </MapboxGL.ShapeSource>
    );
  }

  // Draw route from user location to clicked POI
  const drawRoute = async (targetCoordinate) => {
    Geolocation.getCurrentPosition(async info => {
      const reqOptions = {
        waypoints: [
          {coordinates: [info.coords.longitude, info.coords.latitude]},
          {coordinates: targetCoordinate},
        ],
        profile: 'walking',
        geometries: 'geojson',
      };
  
      const res = await directionsClient.getDirections(reqOptions).send();
  
      setRoute(makeLineString(res.body.routes[0].geometry.coordinates))
    })

  }

  // Handle onPress event on POI
  const handleClickPOI = (poi) => {
    if (!poi) {
      setRoute(null)
      bottomSheetRef.current.snapTo(2)
      return null
    }

    setCurrPOI(poi)
    drawRoute(poi.coordinate)
    bottomSheetRef.current.snapTo(1)
  };

  // Handle zoom changed
  const handleZoomChanged = e => {
    setIsZoomAbove15(e > 14.5)
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
            {/* USER LOCATION CONFIG */}
            <MapboxGL.UserLocation visible={true} showsUserHeadingIndicator={true} />

            {/* CAMERA CONFIG */}
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
              filteredPOIsState.map((poi, i) => {
                if (currPOI?.coordinate === poi.coordinate) {
                  return (
                    <MapboxGL.PointAnnotation
                      title="currPOITitle"
                      coordinate={poi.coordinate}
                      id="currPOI"
                      ref={annotationRef}
                    >
                      <View style={styles.markerEntrepriseContainer}>
                        <Svg svgs={svgs} name={"pin"} />
                      </View>
                    </MapboxGL.PointAnnotation>
                  )
                }
                return (
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
              )})}

            {/* ENTREPRISE */}
            <MapboxGL.PointAnnotation
              title="entrepriseTitle"
              coordinate={entreprise.coordinate}
              id="entreprise"
              ref={annotationRef}
            >
              <View style={styles.markerEntrepriseContainer}>
                <View style={styles.markerDotEntreprise} />
                <Svg style={styles.buildingEntreprise} svgs={svgs} name={"building"} />
              </View>
            </MapboxGL.PointAnnotation>

            {/* RENDER ROUTE WHEN NEEDED */}
            {renderOrigin()}
            {renderRoute()}

          </MapboxGL.MapView>
        </View>
      </View>

      {/* BOTTOM PANEL WHEN A POI IS CLICKED */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["87%", 220, 0]}
        initialSnap={2}
        onCloseEnd={() => handleClickPOI(null)}
        renderContent={() => (
          <View style={{ backgroundColor: Color.white, position: "relative" }}>
            <TouchableOpacity
              onPress={() => handleClickPOI(null)}
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
