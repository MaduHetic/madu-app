import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    borderRadius: 12,
    padding: 10,
    alignSelf: "center",
    marginRight: 5,
    marginVertical: 2.5,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: Color.white,
  },
});

const Tag = ({ tags }) => (
  <View style={styles.container}>
    {tags.map(({ tag, colorTag }, i) => (
      <View key={i} style={[styles.item, { backgroundColor: `#${colorTag}` }]}>
        <Text style={styles.text}>{tag}</Text>
      </View>
    ))}
  </View>
);

export default Tag;
