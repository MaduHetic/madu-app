import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color } from "@glossy/colors";

import Home from "./home";
import Map from "./map";

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
  tabs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
              size={30}
              style={{
                color: isFocused ? Color.Blue : Color.NightRider,
                padding: 5,
              }}
            />
            <Text style={{ color: isFocused ? Color.Blue : Color.NightRider }}>
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
    <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: "home" }} />
    <Tab.Screen name="Carte" component={Map} options={{ tabBarIcon: "map" }} />
    <Tab.Screen name="Liste" component={Home} options={{ tabBarIcon: "list" }} />
    <Tab.Screen name="Compte" component={Home} options={{ tabBarIcon: "user-circle" }} />
  </Tab.Navigator>
);

export default HomeNagivation;
