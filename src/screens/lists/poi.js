import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "@components/button";
import { useRoute } from "@react-navigation/native";
import { Poi as PointOfIntress } from "@core/poi";
import Tag from "@components/tag";
import { Color } from "@glossy/colors";

import svgs from "@assets/svg/sprite";
import Svg from "@components/svg";

import CustomModal from "@components/modal";

const screenHeight = Math.round(Dimensions.get("window").height);
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    // fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    color: Color.black,
    marginTop: 40,
  },
  image: {
    height: screenHeight / 4,
    resizeMode: "cover",
    justifyContent: "center",
    position: "relative",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 40,
  },
  img: {
    resizeMode: "cover",
    margin: 5,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.lightGrey,
    borderRadius: 4,
    padding: 5,
    marginRight: 10,
  },
  icon: {
    marginRight: 7,
  },
  informationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 10,
  },
  rating: {
    color: Color.mediumGrey,
  },
  greenScore: {
    color: Color.primary,
    marginHorizontal: 3,
  },
  greenScoreNotation: {
    fontSize: 10,
  },
  description: {
    lineHeight: 20,
    fontSize: 13,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    padding: 10,
    backgroundColor: Color.white,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 69,
    height: 69,
    backgroundColor: Color.white,
    borderRadius: 69,
    marginRight: 10,
    resizeMode: "contain",
  },
});

const Poi = () => {
  const { params } = useRoute();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const getPoi = PointOfIntress.getPoi();
  const place = PointOfIntress.poi();
  const poiValidate = PointOfIntress.poiValidate();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getPoi(params.id);
  }, []);

  const calculatedSize = () => {
    const size = windowWidth / 2.5;
    return { width: size, height: size };
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getPoi(params.id);
    setRefreshing(false);
  }, [refreshing]);

  console.log(place);

  if (!place) return null;
  return (
    <>
      <View style={{ position: "relative" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {place.mainImg && (
            <ImageBackground source={{ uri: place.mainImg }} style={styles.image}>
              <View style={{ width: "30%", marginLeft: 30 }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.6}
                >
                  <View style={styles.row}>
                    <AntDesign
                      style={styles.icon}
                      name="arrowleft"
                      size={20}
                      color={Color.primary}
                    />
                    <Text style={{ color: Color.primary }}>Retour</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.row,
                  {
                    position: "absolute",
                    bottom: -60,
                    padding: 24,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.1,
                  },
                ]}
              >
                {place.logo ? (
                  <Image style={styles.logo} source={{ uri: place.logo }} />
                ) : (
                  <View style={styles.logo} />
                )}
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons style={styles.icon} name="walk" size={15} />
                  {place.distance < 999 ? (
                    <Text>{place.distance}m</Text>
                  ) : (
                    <Text>{(place.distance / 1000).toFixed(1)}km</Text>
                  )}
                </View>
              </View>
            </ImageBackground>
          )}

          <SafeAreaView>
            <View style={{ padding: 24 }}>
              <Text style={styles.title}>{place.name}</Text>
              {place.tags && <Tag tags={place.tags} />}
              <View style={styles.row}>
                <TouchableOpacity
                  style={[styles.informationContainer, styles.greenScore]}
                  onPress={() => setModalVisible(true)}
                >
                  <Svg svgs={svgs} name="score" height={16} width={16} />
                  <Text style={styles.greenScore}>
                    <Text>{place.greenScore}</Text>
                    <Text style={styles.greenScoreNotation}>/10</Text>
                  </Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="seed-outline"
                    size={20}
                  />
                  <Text>{`${place.reward}`}</Text>
                </View>
              </View>
              <Text>{place.description}</Text>
              {place.imgs && (
                <View style={styles.imageContainer}>
                  {place.imgs.map((img, i) => (
                    <Image
                      key={i}
                      source={{ uri: img }}
                      style={[styles.img, calculatedSize()]}
                    />
                  ))}
                </View>
              )}
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={{ position: "absolute", bottom: 20, left: 24, right: 24 }}>
          <Button
            text="Y aller 👍"
            onPress={() => {
              poiValidate(place.id);
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.long}`,
              );
            }}
            color="blue"
          />
        </View>
      </View>
      <CustomModal
        isVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        title="Madu scoring"
        groupBtn={
          <Button
            text={"J'ai Compris"}
            color="blue"
            onPress={() => setModalVisible(false)}
          />
        }
      >
        {place?.typeGreenScore &&
          place.typeGreenScore.map(({ typeGreenScore, mark }, i) => (
            <View style={styles.row} key={i}>
              <Text style={{ fontSize: 17, lineHeight: 28, color: Color.darkGrey }}>
                {`${typeGreenScore.typeGreenScore} : `}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 28,
                  color: mark > 5 ? Color.blueOcean : Color.statusAlert,
                }}
              >
                {mark}
              </Text>
            </View>
          ))}
      </CustomModal>
    </>
  );
};

export default Poi;
