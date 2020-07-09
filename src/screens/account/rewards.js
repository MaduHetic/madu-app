import React from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Color } from "@glossy/colors";
import Svgs from "@assets/svg/gems";
import Svg from "@components/svg";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Color.white,
  },
  item: {
    marginVertical: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rewardContainer: {
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 18,
    color: Color.dark,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    color: Color.mediumGrey,
  },
  type: {
    textAlign: "center",
    marginVertical: 7,
    color: Color.mediumGrey,
  },
});

const Rewards = () => {
  const rewards = [
    {
      title: "Véganisme à tout prix",
      reason: "Vous avez mangé dans plus de 250 enseign vegan",
      badges: [
        { name: "Vegan", type: "Bronze", text: "Bronze", rewarded: true },
        { name: "Vegan", type: "Silver", text: "Argent", rewarded: true },
        { name: "Vegan", type: "Gold", text: "Or", rewarded: true },
        { name: "Vegan", type: "Platine", text: "Platine", rewarded: true },
      ],
    },
    {
      title: "Pro du circuit-court",
      reason:
        "Vous avez mangé 10 fois dans des établissements soutenant les circuits-courts",
      badges: [
        { name: "ShortCircus", type: "Bronze", text: "Bronze", rewarded: true },
        { name: "ShortCircus", type: "Silver", text: "Argent", rewarded: false },
        { name: "ShortCircus", type: "Gold", text: "Or", rewarded: false },
        { name: "ShortCircus", type: "Platine", text: "Platine", rewarded: false },
      ],
    },
    {
      title: "L’avanturier",
      reason: "Vous avez testé 10 restaurants différents",
      badges: [
        { name: "Adventure", type: "Bronze", text: "Bronze", rewarded: true },
        { name: "Adventure", type: "Silver", text: "Argent", rewarded: false },
        { name: "Adventure", type: "Gold", text: "Or", rewarded: false },
        { name: "Adventure", type: "Platine", text: "Platine", rewarded: false },
      ],
    },
    {
      title: "Le marcheur vert",
      reason: "vous avez fait plus de 10km pour aller vous chercher à manger",
      badges: [
        { name: "Walker", type: "Bronze", text: "Bronze", rewarded: true },
        { name: "Walker", type: "Silver", text: "Argent", rewarded: false },
        { name: "Walker", type: "Gold", text: "Or", rewarded: false },
        { name: "Walker", type: "Platine", text: "Platine", rewarded: false },
      ],
    },
    {
      title: "Celui qui a reponse à tout",
      reason: "Vous avez repondu à 12 quiz",
      badges: [
        { name: "Omniscient", type: "Bronze", text: "Bronze", rewarded: true },
        { name: "Omniscient", type: "Silver", text: "Argent", rewarded: false },
        { name: "Omniscient", type: "Gold", text: "Or", rewarded: false },
        { name: "Omniscient", type: "Platine", text: "Platine", rewarded: false },
      ],
    },
    {
      title: "Le malin du quotidien",
      reason: "Vous avez accompli 4 challenges au quotidien",
      badges: [
        { name: "Daily", type: "Bronze", text: "Bronze", rewarded: true },
        { name: "Daily", type: "Silver", text: "Argent", rewarded: false },
        { name: "Daily", type: "Gold", text: "Or", rewarded: false },
        { name: "Daily", type: "Platine", text: "Platine", rewarded: false },
      ],
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {rewards.map(({ title, badges, reason }, index) => (
            <View style={styles.item} key={index}>
              <Text style={styles.title}>{title}</Text>
              <View style={[styles.row, styles.rewardContainer]}>
                {badges.map(({ name, type, text, rewarded }, i) => (
                  <View key={i}>
                    <Svg
                      svgs={Svgs}
                      name={`${name}${rewarded ? type : "PlaceHolder"}`}
                      height={58}
                      width={58}
                    />
                    <Text style={styles.type}>{text}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.text}>{reason}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rewards;
