import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import Svg from "../svg";
import svgs from "@assets/svg/tutorial";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    padding: 24,
    marginHorizontal: 8,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.lightGrey,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    letterSpacing: -1.5,
    color: Color.Dark,
  },
  explination: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    color: Color.Dark,
  },
});

const Tutorial = ({ item: { title, svg, explination } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Svg svgs={svgs} name={svg} height={220} width={220} />
      <Text style={styles.explination}>{explination}</Text>
    </SafeAreaView>
  );
};

export default Tutorial;
