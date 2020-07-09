import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import svgs from "@assets/svg/sprite";
import Svg from "@components/svg";

import { Color } from "@glossy/colors";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 160,
    marginVertical: 10,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    backgroundColor: Color.white,
    borderRadius: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 18,
    color: Color.black,
    marginTop: 24,
  },
  image: {
    height: 140,
    width: "100%",
    resizeMode: "cover",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    backgroundColor: Color.lightGrey,
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
});

const Places = ({
  item: {
    id,
    mainImg,
    name,
    starRating,
    nbOfRatings,
    greenScore,
    description,
    distance,
    reward,
  },
}) => {
  const [rating, setRating] = useState();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (starRating > 0) {
      setRating("Tres bon");
    }
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("poi", { id })}
    >
      {mainImg ? (
        <Image style={styles.image} source={{ uri: mainImg }} />
      ) : (
        <View style={styles.image} />
      )}
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.informationContainer}>
          {/* <View style={[styles.informationContainer, styles.rating]}>
            <Icon style={[styles.icon, styles.rating]} name="star" size={15} />
            <Text
              style={styles.rating}
            >{`${starRating} ${rating} (${nbOfRatings})`}</Text>
          </View> */}
          <View style={[styles.informationContainer, styles.greenScore]}>
            {/* <Icon style={[styles.icon, styles.greenScore]} name="star" size={15} /> */}
            <Svg svgs={svgs} name="score" height={16} width={16} />
            <Text style={styles.greenScore}>
              <Text>{greenScore}</Text>
              <Text style={styles.greenScoreNotation}>/10</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.informationContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons style={styles.icon} name="walk" size={15} />
            <Text>{distance}m</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons style={styles.icon} name="seed-outline" size={20} />
            <Text>{`${reward}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Places;
