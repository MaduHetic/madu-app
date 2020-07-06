import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Poi } from "@core/poi";
import Place from "@components/card/places";
import { Color } from "@glossy/colors";

import Riccardo from "@assets/images/riccardo-bergamini.jpg";
import oranges from "@assets/images/oranges.jpg";

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  title: {
    color: Color.black,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 30,
  },
});

const BestOfList = () => {
  const { params } = useRoute();
  const getAllPoi = Poi.getAllPoi();
  const allPoi = Poi.allPoi();

  useEffect(() => {
    getAllPoi();
    console.log(allPoi);
  }, []);

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

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ padding: 24 }}>
          {/* <Text>{params.list}</Text> */}
          <View style={styles.container}>
            <Text style={styles.title}>Du salé dans l’assiette</Text>
            <FlatList
              data={restaurants.slice(0, 4)}
              renderItem={({ item }) => <Place item={item} key={item.key} />}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {restaurants.length > 4 && (
            <View style={styles.container}>
              <Text style={styles.title}>Les douceurs sucrées</Text>
              <FlatList
                data={restaurants.slice(4, restaurants.length - 1)}
                renderItem={({ item }) => <Place item={item} key={item.key} />}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default BestOfList;
