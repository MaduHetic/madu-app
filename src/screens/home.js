import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  RefreshControl,
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomModal from "@components/modal";

import { User } from "@core/user";
import { KnowIt } from "@core/knowIt";
import { Quizz } from "@core/quizz";
import QuizzScreen from "./quizz";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getCredsFromStorage } from "../middlewares/saveCredentials";
import HeaderTitle from "@components/headerTitle";
import Title from "@components/title";
import { Challenge } from "@core/challenge";
import Button from "@components/button";

import { Poi as PointOfIntress } from "@core/poi";

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
  const [refreshing, setRefreshing] = useState(false);
  const [challengeId, setChallengeId] = useState(0);
  const navigation = useNavigation();
  const getKnowIt = KnowIt.getKnowIt();
  const knowItItem = KnowIt.data();
  const getThemes = Quizz.getThemes();
  const themes = Quizz.themes();
  const getChallengeCurrent = Challenge.getChallengeCurrent();
  const validateChallenge = Challenge.validateChallenge();
  const challengeData = Challenge.data();
  const screenWidth = Dimensions.get("window").width;
  const name = User.firstName();

  const getTutorialValidation = async () => {
    const res = await AsyncStorage.getItem("tutorial");
    return JSON.parse(res);
  };

  const getAllPoi = PointOfIntress.getAllPoi();
  const allPoi = PointOfIntress.allPoi();

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
    getAllPoi();
    getChallengeCurrent();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getKnowIt();
    getThemes();
    getAllPoi();
    setRefreshing(false);
    getChallengeCurrent();
  }, [refreshing]);

  const item = ({ item }) => (
    <Card style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemText}>{item.description}</Text>
      {item.crystalGain && !item.doIt && (
        <View style={{ width: "50%", alignSelf: "center", marginVertical: 10 }}>
          <Button
            small
            text="Participer"
            color="blue"
            onPress={() => setChallengeId(item.id)}
          />
        </View>
      )}
      {item.doIt && item.crystalGain && (
        <View style={styles.row}>
          <MaterialCommunityIcons style={styles.icon} name="seed-outline" size={20} />
          <Text>{`${item.crystalGain} gagné`}</Text>
        </View>
      )}
    </Card>
  );

  const carrouselItems = [...knowItItem, ...challengeData];
  return (
    <View style={{ flex: 1, backgroundColor: Color.white, paddingTop: 20 }}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        <HeaderTitle title={`Hello ${name}`} subTitle={moment().format("dddd DD MMMM")} />
        <View style={styles.container}>
          <View>
            <Carousel
              renderItem={item}
              data={carrouselItems}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              onSnapToItem={(index) => setActiveSlide(index)}
              activeSlideAlignment="start"
            />
            <Pagination
              dotsLength={carrouselItems.length}
              activeDotIndex={activeSlide}
              dotStyle={styles.dots}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
          </View>
          <View style={styles.section}>
            <Title text="Offres de la semaine" />
            <FlatList
              data={allPoi}
              renderItem={({ item }) => <Place item={item} key={item.key} />}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.section}>
            <Title text="Quiz de la semaine" />
            <FlatList
              data={themes}
              renderItem={({ item }) => <Quiz item={item} key={item.key} />}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {challengeData
          .filter(({ id }) => id === challengeId)
          .map(({ id, description }) => (
            <CustomModal
              key={id}
              isVisible={challengeId > 0}
              closeModal={() => setChallengeId(0)}
              title={description}
              groupBtn={
                <Button
                  text="J'ai reussi le challenge"
                  color="blue"
                  onPress={() => {
                    validateChallenge(id);
                    setChallengeId(0);
                  }}
                />
              }
            />
          ))}
      </ScrollView>
    </View>
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
      <Stack.Screen name={"quizzEnd"} component={QuizzScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
