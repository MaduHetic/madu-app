import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Stepper from "@components/steps/stepper";
import Button from "@components/button";
import { Color } from "@glossy/colors";
import background from "@assets/images/background.png";
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
  blueText: {
    color: Color.primary,
  },
  bigText: {
    fontSize: 48,
    textAlign: "center",
  },
  background: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: "space-around",
    padding: 24,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

const Quizz = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const getQuizz = CoreQuizz.getQuizz();
  const questions = CoreQuizz.questions();
  const sendQuizzForm = CoreQuizz.sendQuizzForm();
  const quizzResponse = CoreQuizz.quizzResponse();
  const [activeIndex, setActiveIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getQuizz(params.id);
    return () => {
      setActiveIndex(0);
    };
  }, []);

  const handleSubmit = () => {
    sendQuizzForm({ idThemeQuizz: params.id, answers: answers });
  };

  const handleAnswer = (goodAnswer, questionId, answerId) => {
    setAnswered(true);
    setAnswers([
      ...answers,
      {
        idQuizz: questionId,
        idAnswer: answerId,
      },
    ]);
    setTimeout(() => {
      if (activeIndex === questions.length - 1) {
        handleSubmit();
        navigation.navigate("quizzEnd", { nbQuestions: questions.length });
      } else {
        setActiveIndex(activeIndex + 1);
        setAnswered(false);
      }
    }, 3000);
  };

  if (params.nbQuestions) {
    return (
      <ImageBackground source={background} style={styles.background}>
        <View />
        <View>
          <Text style={[styles.blueText, styles.bigText]}>
            {params.nbCorrect} / {params.nbQuestions}
          </Text>
          <Text style={{ textAlign: "center" }}>
            Vous avez obtenu{" "}
            <Text style={styles.blueText}>
              {`${quizzResponse.goodAnswer} bonnes réponses sur ${quizzResponse.totalAnswer}`}
            </Text>
          </Text>
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate("Home")}
            text="Retour a l’accueil"
            color="blue"
          />
        </View>
      </ImageBackground>
    );
  }

  return (
    <SafeAreaView>
      <Stepper entries={questions} activeIndex={activeIndex} />
      <View style={styles.container}>
        <Text style={styles.title}>{questions[activeIndex]?.question}</Text>
        {questions[activeIndex]?.answer.map(({ id, answer, goodAnswer }) => (
          <Button
            key={id}
            onPress={() => handleAnswer(goodAnswer, questions[activeIndex].id, id)}
            color={answered ? (goodAnswer ? "green" : "red") : ""}
            text={answer}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Quizz;
