import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleDecorator: {
    height: 24,
    width: 2,
    backgroundColor: Color.black,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    borderLeftWidth: 5,
  },
  orange: {
    backgroundColor: Color.peich,
  },
  cyan: {
    backgroundColor: Color.swamp,
  },
});

const TextWithDecorator = ({ text, color }) => (
  <View style={styles.container}>
    <View style={[styles.titleDecorator, styles[color]]} />
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default TextWithDecorator;
