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
import Icon from "react-native-vector-icons/FontAwesome";

import Riccardo from "../assets/images/riccardo-bergamini.jpg";
import oranges from "../assets/images/oranges.jpg";

import { User } from "@core/user";
import { KnowIt } from "@core/knowIt";
import { Quizz } from "@core/quizz";
import QuizzScreen from "./quizz";
import { getCredsFromStorage } from "../middlewares/saveCredentials";
import HeaderTitle from "@components/headerTitle";

moment.locale("fr");

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Color.white,
  },
  section: {
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    padding: 14,
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
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  const getKnowIt = KnowIt.getKnowIt();
  const knowItItem = KnowIt.data();
  const getThemes = Quizz.getThemes();
  const themes = Quizz.themes();
  const screenWidth = Dimensions.get("window").width;
  const name = User.firstName();

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
    getThemes();
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

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderTitle title={`Hello ${name}`} subTitle={moment().format("dddd DD MMMM")} />
        <View style={styles.container}>
          <View>
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
              data={themes}
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
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"home"} component={Home} />
      <Stack.Screen name={"tutorial"} component={Tutorial} />
      <Stack.Screen
        name={"quizz"}
        component={QuizzScreen}
        options={{
          headerShown: true,
          headerTitle: () => <View />,
          headerLeft: () => (
            <View style={styles.row}>
              <Icon
                name="arrow-circle-o-left"
                size={32}
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 24, marginRight: 16 }}
              />
              <Text style={{ fontSize: 24, lineHeight: 32 }}>Quiz de la semaine</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
