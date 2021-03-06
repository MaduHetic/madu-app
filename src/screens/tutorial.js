import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import Carousel, { Pagination } from "react-native-snap-carousel";
import TutorialCard from "@components/card/tutorial";
import background from "@assets/images/background.png";

import Button from "../components/button";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

const Tutorial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  const entries = [
    {
      title: "Collecter des graines",
      svg: "Money",
      explination: "Les graines sont des récompenses que vous pouvez collecter.",
    },
    {
      title: "Débloquer des badges",
      svg: "Board",
      explination: "Collectez les badges et partagez-les avec vos collègues.",
    },
    {
      title: "Les quiz",
      svg: "Quiz",
      explination: "En faisant des quiz vous pouvez collecter des graines.",
    },
  ];

  const finishedTutorial = async () => {
    await AsyncStorage.setItem("tutorial", JSON.stringify({ done: true }));
    return navigation.navigate("home");
  };

  const handleSlider = () => {
    if (activeSlide !== entries.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      finishedTutorial();
    }
  };

  return (
    <ImageBackground source={background} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Carousel
            renderItem={TutorialCard}
            data={entries}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            onSnapToItem={(index) => setActiveSlide(index)}
            activeSlideAlignment="center"
            firstItem={activeSlide}
          />
          <View style={{ marginBottom: 30 }} />
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.dots}
            inactiveDotStyle={styles.inactiveDotStyle}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>
        <View style={{ margin: 20 }}>
          <Button color="blue" onPress={handleSlider} text="Suivant" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Tutorial;
