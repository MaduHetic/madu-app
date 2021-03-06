import React from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Color } from "@glossy/colors";

const DATA = [
  {
    id: 0,
    title: "Restaurants",
    type: "Food",
  },
  {
    id: 1,
    title: "Magasins",
    type: "Shopping",
  },
  {
    id: 2,
    title: "Activités",
    type: "Activity",
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    zIndex: 1,
    position: "relative",
    width: "100%",
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: 8,
  },
  item: {
    paddingBottom: 12,
    borderBottomColor: Color.primary,
    borderBottomWidth: 0,
    flex: 1,
  },
  title: {
    color: Color.mediumGrey,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});

function Item({ title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.item, { borderBottomWidth: selected ? 4 : 0 }]}
    >
      <Text
        style={[styles.title, { color: selected ? Color.primary : Color.mediumGrey }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function FilterBarPOI({ selected, setSelected }) {
  return (
    <SafeAreaView style={styles.container}>
      {DATA.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          selected={selected === item.type}
          onSelect={() => setSelected(item.type)}
        />
      ))}
    </SafeAreaView>
  );
}
