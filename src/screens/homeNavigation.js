import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color } from "@glossy/colors";

import Home from "./home";
import Map from "./map";
import AccountNavigation from "./account";
import ListNavigator from "./lists";
import Poi from "./lists/poi";
import Quizz from "./quizz";

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    height: Platform.Os === "ios" ? 150 : 100,
    alignItems: "center",
    padding: Platform.Os === "ios" ? 40 : 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 14,
    backgroundColor: Color.white,
  },
  tabs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    color: Color.mediumGrey,
    padding: 5,
  },
  tabActive: {
    color: Color.primary,
    padding: 5,
  },
});

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.navigationContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabs}
          >
            <Icon
              name={options.tabBarIcon}
              size={24}
              style={isFocused ? styles.tabActive : styles.tab}
            />
            <Text style={isFocused ? styles.tabActive : styles.tab}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNagivation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={"Home"}>
      {() => (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: "home" }} />
          <Tab.Screen name="Carte" component={Map} options={{ tabBarIcon: "map" }} />
          <Tab.Screen
            name="Liste"
            component={ListNavigator}
            options={{ tabBarIcon: "list" }}
          />
          <Tab.Screen
            name="Compte"
            component={AccountNavigation}
            options={{ tabBarIcon: "user-circle" }}
          />
        </Tab.Navigator>
      )}
    </Stack.Screen>
    <Stack.Screen name={"poi"} component={Poi} />
    <Stack.Screen name={"quizzEnd"} component={Quizz} />
  </Stack.Navigator>
);

export default HomeNagivation;
