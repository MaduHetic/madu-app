import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  RefreshControl,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import LineIcon from "react-native-vector-icons/SimpleLineIcons";
import moment from "moment";
import "moment/locale/fr";
import Place from "@components/card/places";

const Stack = createStackNavigator();
moment.locale("fr");

import HeaderTitle from "@components/headerTitle";
import Rewards from "./rewards";
import Svg from "@components/svg";
import Button from "@components/button";
import { User } from "@core/user";
import { Poi } from "@core/poi";
import TextWithDecorator from "@components/textWithDecorator";
import Svgs from "@assets/svg/gems";

import { Color } from "@glossy/colors";

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
    backgroundColor: Color.lightGrey,
    marginTop: 40,
    marginBottom: 12,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
  },
  email: {
    color: Color.darkGrey,
    fontSize: 14,
    marginVertical: 16,
  },
  button: {
    fontSize: 16,
    color: Color.statusError,
    padding: 15,
    textAlign: "center",
  },
  footer: {
    fontSize: 10,
    textAlign: "center",
    color: Color.mediumGrey,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginVertical: 0,
  },
});

export const Account = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const getCurrentUser = User.getCurrentUser();
  const signOut = User.signOut();
  const user = User.user().user.user;
  const company = user?.company;
  const getHistory = Poi.poiHistoric();
  const history = Poi.history();

  useEffect(() => {
    getCurrentUser();
    getHistory();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getCurrentUser();
    getHistory();
    setRefreshing(false);
  }, [refreshing]);

  const rewards = [
    { name: "Vegan", type: "Gold" },
    { name: "ShortCircus", type: "Bronze" },
    { name: "Adventure", type: "Bronze" },
    { name: "Walker", type: "Bronze" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Color.white, paddingTop: 50 }}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <HeaderTitle title="Votre compte" subTitle={"8 trophées"} />
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={[styles.row, styles.rewardContainer]}>
              <TextWithDecorator text="A propos de vous" color={Color.black} />
              <Icon name="gear" size={20} />
            </View>
            {company.logo && (
              <Image source={{ uri: company.logo }} style={styles.image} />
            )}
            <Text style={styles.email}>{company.domainMail}</Text>
            <Text style={styles.text}>{`Inscrit depuis ${moment(user.createDate).format(
              "MMMM YYYY",
            )}`}</Text>
            <Text style={styles.text}>
              {company.nbWorker} collegue{company.nbWorker === 1 ? "" : "s"}
            </Text>
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
          {history.length > 0 && (
            <>
              <View style={[styles.row, styles.rewardContainer]}>
                <TextWithDecorator text="Historique" color={Color.sunglow} />
                <LineIcon
                  name="arrow-right-circle"
                  size={32}
                  onPress={() => navigation.navigate("rewards")}
                  color={Color.sunglow}
                />
              </View>
              <FlatList
                data={history}
                renderItem={({ item }) => <Place item={item} key={item.key} />}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
        </View>
        <TouchableOpacity
          onPress={() => signOut()}
          style={[styles.section, styles.buttonContainer]}
        >
          <Text style={styles.button}>Se déconnecter</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Vous nous quittez deja ? 😟</Text>
      </ScrollView>
    </View>
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
