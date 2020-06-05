import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: Color.white,
    borderBottomColor: Color.lightGrey,
  },
  title: {
    fontSize: 25,
    padding: 14,
  },
  subTitle: {
    fontSize: 13,
    color: Color.mediumGrey,
  },
});

const HeaderTitle = ({ title, subTitle }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
  </View>
);

export default HeaderTitle;
