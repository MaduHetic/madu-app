import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import LineIcon from "react-native-vector-icons/SimpleLineIcons";
import moment from "moment";
import "moment/locale/fr";

const Stack = createStackNavigator();
moment.locale("fr");

import HeaderTitle from "@components/headerTitle";
import Rewards from "./rewards";
import Svg from "@components/svg";
import Button from "@components/button";
import { User } from "@core/user";
import TextWithDecorator from "@components/textWithDecorator";

import staticImage from "@assets/images/fdj.jpg";
import Svgs from "@assets/svg/gems";

import { Color } from "@glossy/colors";
import Title from "@components/title";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Color.white,
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
  buttonContainer: {
    margin: 40,
  },
});

export const Account = () => {
  const navigation = useNavigation();
  const signOut = User.signOut();

  const [email] = useState("mail@mail.com");
  const [date, setDate] = useState("07-01-2020");

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
            <View style={[styles.row, styles.rewardContainer]}>
              <TextWithDecorator text="A propos de vous" color={Color.black} />
              <Icon name="gear" size={20} />
            </View>
            {staticImage && <Image source={staticImage} />}
            <Text>{email}</Text>
            <Text>{`Inscrit depuis ${moment(date).format("MMMM YYYY")}`}</Text>
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.rewardContainer]}>
              <TextWithDecorator text="Vos trophés" color={Color.black} />
              <LineIcon
                name="arrow-right-circle"
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
        <View style={[styles.section, styles.buttonContainer]}>
          <Button onPress={() => signOut()} color="red" text="Se déconnecter" />
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
              <LineIcon
                name="arrow-left-circle"
                size={32}
                onPress={() => navigation.navigate("account")}
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
