import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons";
import { Color } from "@glossy/colors";

import Home from "./home";

const styles = StyleSheet.create({
  navigationContainer: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    flexDirection: "row",
    height: 150,
    alignItems: "center",
    padding: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 14,
    backgroundColor: "#fff",
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
            style={{ flex: 1 }}
          >
            {/* <Icon
              name="home"
              size={30}
              style={{ color: isFocused ? Color.CeruleanBlue : Color.NightRider }}
              getImageSource
            /> */}
            <Text style={{ color: isFocused ? Color.CeruleanBlue : Color.NightRider }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HomeNagivation = () => (
  <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Carte" component={Home} />
    <Tab.Screen name="Liste" component={Home} />
    <Tab.Screen name="Compte" component={Home} />
  </Tab.Navigator>
);

export default HomeNagivation;
