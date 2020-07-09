import React, { Fragment, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Color } from "@glossy/colors";
import BottomSheet from "reanimated-bottom-sheet";
import { point } from '@turf/helpers';
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import Geolocation from '@react-native-community/geolocation';
import { MAP_KEY } from "react-native-dotenv";
import svgs from "@assets/svg/sprite";
import Svg from "@components/svg";
import BottomSheetContent from "@components/bottomSheetContent";
import { User } from "@core/user";

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
  pinDistanceContainer: {
    width: 180,
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  distanceContainer: {
    position: "absolute",
    left: 0,
    display: "flex",
    backgroundColor: Color.primary,
    borderRadius: 4,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 27,
  },
  distanceText: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.5,
    marginLeft: 4,
  },
  containerLogo: {
    width: "100%",
    height: 0,
    position: "relative",
  },
  wrapperLogo: {
    position: "absolute",
    top: -24,
    left: 24,
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: Color.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 38,
    height: 38,
  }
});

const Map = ({ filteredPOIs }) => {
  const mapEl = useRef(null);
  const bottomSheetRef = useRef(null);
  const annotationRef = useRef(null);
  const user = User.user().user.user;

  const [filteredPOIsState, setFilteredPOIsState] = React.useState([]);
  const [currPOI, setCurrPOI] = React.useState(null);
  const [isZoomAboveX, setIsZoomAboveX] = React.useState(true);
  const [route, setRoute] = React.useState(null);
  const [distance, setDistance] = React.useState(0);
  const [isLogoHidden, setIsLogoHidden] = React.useState(false);

  // POIs filter
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);

    if (currPOI) handleClickPOI(null)

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
      setDistance((res.body.routes[0].distance / 1000).toFixed(1))
    })

  }

  // Handle onPress event on POI
  const handleClickPOI = (poi) => {
    if (!poi) {
      setRoute(null)
      setCurrPOI(null)
      bottomSheetRef.current.snapTo(2)
      return null
    }

    setCurrPOI(poi)
    drawRoute([Number(poi.long), Number(poi.lat)])
    bottomSheetRef.current.snapTo(1)
  };

  // Handle zoom changed
  const handleZoomChanged = e => {
    setIsZoomAboveX(e > 13.5)
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
            id="MapView"
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

            {/* RENDER ROUTE WHEN NEEDED */}
            {renderOrigin()}
            {renderRoute()}

            {/* POIS */}
            {filteredPOIsState &&
              filteredPOIsState.map((poi, i) => {
                if (currPOI?.long == poi.long && currPOI?.lat == poi.lat) {
                  return (
                    <MapboxGL.PointAnnotation
                      key={i}
                      title="currPOITitle"
                      coordinate={[Number(poi.long), Number(poi.lat)]}
                      id="currPOI"
                      ref={annotationRef}
                    >
                      <View style={styles.pinDistanceContainer}>
                        <Svg svgs={svgs} name={"pin"} />
                        <View style={styles.distanceContainer}>
                          <Svg svgs={svgs} name={"pedestrian"} width={16} />
                          <Text style={styles.distanceText}>{distance || 1.2}km</Text>
                        </View>
                      </View>
                    </MapboxGL.PointAnnotation>
                  )
                }
                return (
                  <Fragment key={i}>
                    {/* MarkerView to add onPress event */}
                    <MapboxGL.MarkerView coordinate={[Number(poi.long), Number(poi.lat)]} id="MarkerViewPOI">
                      <TouchableOpacity
                        onPress={() => handleClickPOI(poi)}
                        style={styles.markerView}
                      />
                    </MapboxGL.MarkerView>

                    {/* PointAnnotation - UI */}
                    <MapboxGL.PointAnnotation
                      coordinate={[Number(poi.long), Number(poi.lat)]}
                      id={`PointAnnotation_${i}`}
                      pointerEvents="none"
                    >
                      <View style={styles.markerContainer}>
                        <View style={styles.markerDot} />
                        <Text style={isZoomAboveX ? styles.markerText : {}}>{isZoomAboveX ? poi.name : ""}</Text>
                      </View>
                    </MapboxGL.PointAnnotation>
                  </Fragment>
              )})}

            {/* ENTREPRISE */}
            {user.company.long && user.company.lat && (
              <MapboxGL.PointAnnotation
                title="entrepriseTitle"
                coordinate={[Number(user.company.long), Number(user.company.lat)]}
                id="entreprise"
                ref={annotationRef}
              >
                <View style={styles.markerEntrepriseContainer}>
                  <View style={styles.markerDotEntreprise} />
                  <Svg style={styles.buildingEntreprise} svgs={svgs} name={"building"} />
                </View>
              </MapboxGL.PointAnnotation>
            )}

          </MapboxGL.MapView>
        </View>
      </View>

      {/* BOTTOM PANEL WHEN A POI IS CLICKED */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["87%", 220, 0]}
        initialSnap={2}
        onOpenEnd={() => setIsLogoHidden(true)}
        onCloseStart={() => setIsLogoHidden(false)}
        onCloseEnd={() => handleClickPOI(null)}
        renderContent={() => (
          <BottomSheetContent poi={currPOI} handleClickPOI={handleClickPOI} />
        )}
        renderHeader={() => (
          <View style={styles.containerLogo}>
            {currPOI?.logo && !isLogoHidden && (
              <View style={styles.wrapperLogo}>
                <Image style={styles.logo} source={{ uri: currPOI?.logo }} />
              </View>
            )}
          </View>
        )}
      />
    </>
  );
};

export default Map;
