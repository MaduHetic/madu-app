import React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    height: 34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  indercator: {
    width: 32,
    height: 4,
    backgroundColor: Color.mediumGrey,
    borderRadius: 2,
    marginHorizontal: 2,
  },
  active: {
    backgroundColor: Color.primary,
  },
});

const Stepper = ({ activeIndex, entries }) => {
  return (
    <View style={styles.container}>
      {entries.map((entry, index) => (
        <View
          key={index}
          style={[styles.indercator, index === activeIndex && styles.active]}
        />
      ))}
    </View>
  );
};

export default Stepper;
