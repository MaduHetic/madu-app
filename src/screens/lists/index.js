import React from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import TextWithDecorator from "@components/textWithDecorator";
import Interlayer from "@components/card/interlayer";
import FilterBarPOI from "@components/filterBarPOI";
import Place from "@components/card/places";
import Poi from "./poi";
import BestOfList from "./bestOf";
import { Color } from "@glossy/colors";
import Riccardo from "@assets/images/riccardo-bergamini.jpg";
import oranges from "@assets/images/oranges.jpg";

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

const restaurants = [
  {
    id: 1,
    image: Riccardo,
    title: "Nom du restaurant",
    starRating: 4.4,
    nbOfRatings: 50,
    greenScore: 8.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo id est ultrices maximus sed nec",
    distance: 800,
    reward: 4,
  },
  {
    id: 2,
    image: oranges,
    title: "Nom du restaurant",
    starRating: 4.4,
    nbOfRatings: 50,
    greenScore: 8.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo id est ultrices maximus sed nec",
    distance: 800,
    reward: 4,
  },
  {
    id: 3,
    image: oranges,
    title: "Nom du restaurant",
    starRating: 4.4,
    nbOfRatings: 50,
    greenScore: 8.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo id est ultrices maximus sed nec",
    distance: 800,
    reward: 4,
  },
];

const Lists = [
  {
    data: restaurants,
    title: "Au plus proche de vous",
    color: Color.peich,
    navigation: "bestOfList",
    navigationList: "restaurant",
  },
  {
    data: restaurants,
    title: "Au plus proche de vous",
    color: Color.swamp,
    navigation: "bestOfList",
    navigationList: "restaurant",
  },
  {
    data: restaurants,
    title: "Au plus proche de vous",
    color: Color.coral,
    navigation: "bestOfList",
    navigationList: "restaurant",
  },
  {
    data: restaurants,
    title: "Au plus proche de vous",
    color: Color.coral,
    navigation: "bestOfList",
    navigationList: "restaurant",
  },
];

export const List = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingVertical: 24, position: "relative" }}>
          <FilterBarPOI />
          {Lists.slice(0, 2).map((list, index) => (
            <View style={{ padding: 24 }} key={index}>
              <View style={styles.titleContainer}>
                <TextWithDecorator text={list.title} color={list.color} />
                <Icon
                  name="arrow-circle-o-right"
                  size={32}
                  onPress={() =>
                    navigation.navigate(list.navigation, { list: list.navigationList })
                  }
                  color={list.color}
                />
              </View>
              <View style={styles.section}>
                <FlatList
                  data={list.data}
                  renderItem={({ item }) => <Place item={item} key={item.key} />}
                  keyExtractor={(item) => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          ))}
          <View style={{ padding: 24 }}>
            <Interlayer
              onPress={null}
              text="Nos coups de coeur recommandé"
              backgroundColor={Color.purple}
              image="Heart"
            />
          </View>
          {Lists.slice(2, 4).map((list, index) => (
            <View style={{ padding: 24 }} key={index}>
              <View style={styles.titleContainer}>
                <TextWithDecorator text={list.title} color={list.color} />
                <Icon
                  name="arrow-circle-o-right"
                  size={32}
                  onPress={() =>
                    navigation.navigate(list.navigation, { list: list.navigationList })
                  }
                  color={list.color}
                />
              </View>
              <View style={styles.section}>
                <FlatList
                  data={list.data}
                  renderItem={({ item }) => <Place item={item} key={item.key} />}
                  keyExtractor={(item) => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          ))}
          <View style={{ padding: 24 }}>
            <Interlayer
              onPress={null}
              text="Profitez des bonnes affaires du moment"
              backgroundColor={Color.melon}
              image="Percent"
            />
          </View>
          {Lists.slice(4, 6).map((list, index) => (
            <View style={{ padding: 24 }} key={index}>
              <View style={styles.titleContainer}>
                <TextWithDecorator text={list.title} color={list.color} />
                <Icon
                  name="arrow-circle-o-right"
                  size={32}
                  onPress={() =>
                    navigation.navigate(list.navigation, { list: list.navigationList })
                  }
                  color={list.color}
                />
              </View>
              <View style={styles.section}>
                <FlatList
                  data={list.data}
                  renderItem={({ item }) => <Place item={item} key={item.key} />}
                  keyExtractor={(item) => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          ))}
          <View style={{ padding: 24 }}>
            <Interlayer
              onPress={null}
              text="Retournez à vos endroits favoris"
              backgroundColor={Color.sunglow}
              image="Star"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"list"} component={List} />
      <Stack.Screen name={"poi"} component={Poi} />
      <Stack.Screen name={"bestOfList"} component={BestOfList} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
