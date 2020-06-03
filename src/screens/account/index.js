import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import "moment/locale/fr";

const Stack = createStackNavigator();
moment.locale("fr");

import HeaderTitle from "@components/headerTitle";
import Rewards from "./rewards";
import Svg from "@components/svg";
import { Button } from "@components/button";
import { User } from "@core/user";

import staticImage from "@assets/images/fdj.jpg";
import Svgs from "@assets/svg/gems";

import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Color.white,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleDecorator: {
    height: 24,
    width: 2,
    backgroundColor: Color.black,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    borderLeftWidth: 5,
  },
  section: {
    marginBottom: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rewardContainer: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  type: {
    textAlign: "center",
  },
});

export const Account = () => {
  const navigation = useNavigation();
  const signOut = User.signOut();

  const [email] = useState("mail@mail.com");
  const [date] = useState("07-01-2020");

  const rewards = [
    { name: "Vegan", type: "Gold" },
    { name: "ShortCircus", type: "Bronze" },
    { name: "Adventure", type: "Bronze" },
    { name: "Walker", type: "Bronze" },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderTitle title="Votre compte" subTitle={"8 trophées"} />
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.titleContainer}>
              <View style={styles.row}>
                <View style={styles.titleDecorator} />
                <Text style={styles.title}>A propos de vous</Text>
              </View>
              <Icon name="gear" size={20} />
            </View>
            {staticImage && <Image source={staticImage} />}
            <Text>{email}</Text>
            <Text>{`Inscrit depuis ${moment(date).format("MMMM YYYY")}`}</Text>
          </View>
          <View style={styles.section}>
            <View style={styles.titleContainer}>
              <View style={styles.row}>
                <View style={styles.titleDecorator} />
                <Text style={styles.title}>Vos trophés</Text>
              </View>
              <Icon
                name="arrow-circle-o-right"
                size={32}
                onPress={() => navigation.navigate("rewards")}
              />
            </View>
            <View style={[styles.row, styles.rewardContainer]}>
              {rewards.slice(0, 4).map(({ name, type }, index) => (
                <View key={index}>
                  <Svg svgs={Svgs} name={`${name}${type}`} height={58} width={58} />
                  <Text style={styles.type}>{type}</Text>
                </View>
              ))}
            </View>
            <Text>Vos dernier trophées obtenue</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Button onPress={() => signOut()} color="red">
            <Text>Se déconnecter</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"account"} component={Account} />
      <Stack.Screen
        name={"rewards"}
        component={Rewards}
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
              <Text style={{ fontSize: 24, lineHeight: 32 }}>Vos trophés</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
