import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import svgs from "@assets/svg/sprite";
import Svg from "@components/svg";

import { Color } from "@glossy/colors";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 160,
    marginRight: 20,
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
    resizeMode: "cover",
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
    image,
    title,
    starRating,
    nbOfRatings,
    greenScore,
    description,
    distance,
    reward,
  },
}) => {
  const [rating, setRating] = useState();

  useEffect(() => {
    if (starRating > 0) {
      setRating("Tres bon");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.informationContainer}>
        <View style={[styles.informationContainer, styles.rating]}>
          <Icon style={[styles.icon, styles.rating]} name="star" size={15} />
          <Text style={styles.rating}>{`${starRating} ${rating} (${nbOfRatings})`}</Text>
        </View>
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
          <Text>{distance}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="money" size={15} />
          <Text>{`${reward} Emeraudes`}</Text>
        </View>
      </View>
    </View>
  );
};
export default Places;
