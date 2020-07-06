import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Heart from "@assets/images/heart.png";
import Percent from "@assets/images/percent.png";
import Star from "@assets/images/star.png";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    borderRadius: 5,
    height: 327,
    display: "flex",
    justifyContent: "flex-end",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    opacity: 0.4,
    padding: 24,
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 24,
  },
  text: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "bold",
    width: "60%",
  },
});

const images = {
  Heart: Heart,
  Percent: Percent,
  Star: Star,
};

const Interlayer = ({ onPress, backgroundColor, text, image }) => (
  <TouchableOpacity
    onPress={() => onPress}
    style={[styles.container, { backgroundColor: backgroundColor }]}
  >
    <View style={styles.imageContainer}>
      <Image source={images[image]} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.text}>{text}</Text>
      <Icon name="arrow-circle-right" size={32} color={Color.white} />
    </View>
  </TouchableOpacity>
);

export default Interlayer;
