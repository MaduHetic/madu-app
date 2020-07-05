import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
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
    borderLeftWidth: 0,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Title = ({ text, children }) => (
  <View style={styles.titleContainer}>
    <View style={styles.row}>
      <View style={styles.titleDecorator} />
      <Text style={styles.title}>{text}</Text>
    </View>
    {children}
  </View>
);

export default Title;
