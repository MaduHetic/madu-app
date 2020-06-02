import React from "react";
import { View, ImageBackground, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Color } from "@glossy/colors";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth - 80,
    marginRight: 20,
    position: "relative",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 327,
    resizeMode: "cover",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.dark,
    padding: 16,
  },
  title: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 4,
  },
  time: {
    color: Color.darkGrey,
    fontSize: 10,
    lineHeight: 12,
  },
  participants: {
    marginVertical: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    backgroundColor: Color.lightGrey,
    borderRadius: 4,
    padding: 5,
    margin: 12,
  },
  icon: {
    marginRight: 7,
  },
  arrow: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Color.white,
    width: 32,
    height: 32,
  },
});

const Quiz = ({ item: { image, reward, title, duration, participants } }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="star" size={15} />
          <Text>{`${reward} Saphires`}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{`Temps moyen : ${duration} minutes`}</Text>
          </View>
          <View style={styles.arrow}>
            <Icon name="arrow-right" size={12} color={Color.dark} />
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.participants}>{participants}</Text>
      </View>
    </View>
  );
};
export default Quiz;
