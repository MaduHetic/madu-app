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
  },
});

const TextWithDecorator = ({ text, color }) => (
  <View style={styles.container}>
    <View style={[styles.titleDecorator, { backgroundColor: color }]} />
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default TextWithDecorator;
