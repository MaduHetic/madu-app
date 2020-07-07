import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
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
  const screenWidth = Math.round(Dimensions.get("window").width);

  return (
    <View style={styles.container}>
      {entries.map((entry, index) => (
        <View
          key={index}
          style={[
            styles.indercator,
            index === activeIndex && styles.active,
            { width: screenWidth / entries.length - 10 },
          ]}
        />
      ))}
    </View>
  );
};

export default Stepper;
