import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Color } from "@glossy/colors";
import svgs from "@assets/svg/sprite";
import Svg from "@components/svg";
import Button from "@components/button";
import Tag from "@components/tag";

const screenHeight = Math.round(Dimensions.get("window").height);
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: Color.white,
    minHeight: screenHeight,
  },
  title: {
    // fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    color: Color.black,
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
  cross: {
    width: 40,
    height: 40,
    backgroundColor: "#F5F5FA",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});

const BottomSheetContent = ({ poi, handleClickPOI }) => {
  const navigation = useNavigation();
  const calculatedSize = () => {
    const size = windowWidth / 2.5;
    return { width: size, height: size };
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ padding: 24 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>{poi?.name}</Text>
            <TouchableOpacity onPress={() => handleClickPOI(null)}>
              <View style={styles.cross}>
                <Svg svgs={svgs} name="cross" height={16} width={16} />
              </View>
            </TouchableOpacity>
          </View>
          {poi?.tags && <Tag tags={poi?.tags} />}
          <View style={styles.row}>
            <View style={[styles.informationContainer, styles.greenScore]}>
              <Svg svgs={svgs} name="score" height={16} width={16} />
              <Text style={styles.greenScore}>
                <Text>{poi?.greenScore?.toFixed(1)}</Text>
                <Text style={styles.greenScoreNotation}>/10</Text>
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons style={styles.icon} name="seed-outline" size={20} />
              <Text>{`${poi?.reward}`}</Text>
            </View>
          </View>
          <Text>{poi?.description}</Text>
          {poi?.imgs && (
            <View style={styles.imageContainer}>
              {poi?.imgs.map((img, i) => (
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

      <View style={{ width: 0.9 * windowWidth, alignSelf: "center" }}>
        <Button
          text="Y aller 👍"
          onPress={() => {
            // Linking.openURL(
            //   `https://www.google.com/maps/search/?api=1&query=${poi?.lat},${poi?.long}`,
            // );
            navigation.navigate("Carte", {
              POIID: poi?.id,
              POIType: poi?.type,
            });
          }}
          color="blue"
        />
      </View>
    </View>
  );
};

export default BottomSheetContent;
