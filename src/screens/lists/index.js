import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import TextWithDecorator from "@components/textWithDecorator";
import FilterBarPOI from "@components/filterBarPOI";
import Poi from "./poi";
import BestOfList from "./bestOf";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export const List = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 24, position: "relative" }}>
        <FilterBarPOI />
        <View style={{ padding: 24 }}>
          <View style={styles.titleContainer}>
            <TextWithDecorator text="Au plus proche de vous" color="orange" />
            <Icon
              name="arrow-circle-o-right"
              size={32}
              onPress={() => navigation.navigate("bestOfList", { list: "restaurant" })}
              color={Color.peich}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"list"} component={List} />
      <Stack.Screen name={"poi"} component={Poi} />
      <Stack.Screen name={"bestOfList"} component={BestOfList} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
