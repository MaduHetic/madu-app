import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
import "moment/locale/fr";
import Card from "@components/card/card";
import Place from "@components/card/places";
import Quiz from "@components/card/quiz";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Tutorial from "./tutorial";

import Riccardo from "../assets/images/riccardo-bergamini.jpg";
import oranges from "../assets/images/oranges.jpg";

import eagle from "../assets/images/eagle.jpg";
import veggies from "../assets/images/veggies.jpg";

import { User } from "@core/user";
import { KnowIt } from "@core/knowIt";
import { getCredsFromStorage } from "../middlewares/saveCredentials";

moment.locale("fr");

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Color.white,
  },
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
  section: {
    marginBottom: 40,
  },
  title: {
    fontSize: 25,
    padding: 14,
  },
  date: {
    fontSize: 13,
    color: Color.mediumGrey,
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: Color.primary,
  },
  inactiveDotStyle: {
    width: 4,
    height: 4,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: Color.mediumGrey,
  },
  item: {
    height: 127,
  },
  itemTitle: {
    fontSize: 16,
    color: Color.black,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 12,
    color: Color.darkGrey,
    lineHeight: 20,
  },
});

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  const getKnowIt = KnowIt.getKnowIt();
  const knowItItem = KnowIt.data();
  const screenWidth = Dimensions.get("window").width;
  const name = "John";

  const getTutorialValidation = async () => {
    const res = await AsyncStorage.getItem("tutorial");
    return JSON.parse(res);
  };

  useEffect(() => {
    const navigatToTutorial = async () => {
      const tutorial = await getTutorialValidation();
      if (!tutorial?.done) {
        navigation.navigate("tutorial");
      }
    };
    navigatToTutorial();
    getKnowIt();
  }, []);

  const item = ({ item }) => (
    <Card style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemText}>{item.description}</Text>
    </Card>
  );

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

  const QuizItem = [
    {
      id: 1,
      image: eagle,
      reward: 12,
      title: "Les animaux d’amerique",
      duration: 4,
      participants: "et 8 autres personnes y ont participés",
    },
    {
      id: 2,
      image: veggies,
      reward: 12,
      title: "Les animaux d’amerique",
      duration: 4,
      participants: "et 8 autres personnes y ont participés",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{`Hello ${name}`}</Text>
          <Text>{moment().format("dddd DD MMMM")}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.section}>
            <Carousel
              renderItem={item}
              data={knowItItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              onSnapToItem={(index) => setActiveSlide(index)}
              activeSlideAlignment="start"
            />
            <Pagination
              dotsLength={knowItItem.length}
              activeDotIndex={activeSlide}
              dotStyle={styles.dots}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Offres de la semaine</Text>
            <FlatList
              data={restaurants}
              renderItem={({ item }) => <Place item={item} key={item.key} />}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Quiz de la semaine</Text>
            <FlatList
              data={QuizItem}
              renderItem={({ item }) => <Quiz item={item} key={item.key} />}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"home"} component={Home} />
      <Stack.Screen name={"tutorial"} component={Tutorial} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
