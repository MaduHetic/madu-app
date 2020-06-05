import React from "react";
import { View, StyleSheet } from "react-native";

// const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 14,
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

const Card = ({ style, children }) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default Card;
