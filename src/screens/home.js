import React from "react";
import { Text, View, StyleSheet } from "react-native";
import moment from "moment";
import "moment/locale/fr";
import Card from "@components/card";

moment.locale("fr");

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    padding: 14,
  },
  date: {
    fontSize: 13,
    color: Color.nightRider,
  },
});

const Home = () => {
  const name = "John";
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{`Hello ${name}`}</Text>
        <Text>{moment().format("dddd DD MMMM")}</Text>
      </View>

      <Card>
        <Text>Le savais tu ?</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus diam,
          convallis ut nibh vel, volutpat convallis mi. Sed gravida, eros id volutpat
          vehicula.
        </Text>
      </Card>

      <Text style={styles.title}>Quiz</Text>
      <Card>
        <Text style={{ textAlign: "center", paddingBottom: 15 }}>
          Les animaux d’Amerique
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo id est
          ultrices.
        </Text>
      </Card>
      <Card>
        <Text style={{ textAlign: "center", paddingBottom: 15 }}>
          L’apport selon les nutriment
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo id est
          ultrices.
        </Text>
      </Card>
    </View>
  );
};

export default Home;
