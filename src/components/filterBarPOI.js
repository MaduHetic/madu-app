import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { Color } from "@glossy/colors";

const DATA = [
  {
    id: 0,
    title: 'Restaurants',
  },
  {
    id: 1,
    title: 'Magasins',
  },
  {
    id: 2,
    title: 'Activités',
  },
];

function Item({ title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[
        styles.item,
        { borderBottomWidth: selected ? 4 : 0 }
      ]}
    >
      <Text 
        style={[
          styles.title,
          { color: selected ? Color.Blue : Color.NightRider },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function FilterBarPOI() {
  const [selected, setSelected] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        contentContainerStyle={styles.list}
        numColumns={3}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            selected={selected === item.id}
            onSelect={() => setSelected(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    zIndex: 1,
    position: "absolute",
    width: "100%"
  },
  list: {
    width: "90%",
    marginLeft: "5%",
    marginTop: 16,
  },
  item: {
    paddingBottom: 12,
    borderBottomColor: Color.Blue,
    borderBottomWidth: 4,
    flex: 1
  },
  title: {
    color: Color.NightRider,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center"
  },
});
