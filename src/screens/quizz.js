import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Stepper from "@components/steps/stepper";
import Button from "@components/button";
import { Color } from "@glossy/colors";

import { Quizz as CoreQuizz } from "@core/quizz";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: "flex",
    justifyContent: "center",
    height: "100%",
    backgroundColor: Color.white,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
    color: Color.black,
    marginVertical: 32,
  },
});

const Quizz = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const getQuizz = CoreQuizz.getQuizz();
  const questions = CoreQuizz.questions();
  const [activeIndex, setActiveIndex] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    getQuizz(params.id);
    return () => {
      setActiveIndex(0);
    };
  }, []);

  const handleAnswer = () => {
    setAnswered(true);
    setTimeout(() => {
      if (activeIndex === questions.length - 1) {
        navigation.navigate("home");
      } else {
        setActiveIndex(activeIndex + 1);
        setAnswered(false);
      }
    }, 3000);
  };

  return (
    <SafeAreaView>
      <Stepper entries={questions} activeIndex={activeIndex} />
      <View style={styles.container}>
        <Text style={styles.title}>{questions[activeIndex]?.question}</Text>
        {questions[activeIndex]?.answer.map(({ id, answer, goodAnswer }) => (
          <Button
            key={id}
            onPress={handleAnswer}
            color={answered ? (goodAnswer ? "green" : "red") : ""}
            text={answer}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Quizz;
