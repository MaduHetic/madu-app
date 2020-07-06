import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

import { User } from "@core/user";
import LoginRegisterNavigator from "../screens/loginRegister/navigation";
import HomeNagivation from "./homeNavigation";
import Header from "@components/header";

const Stack = createStackNavigator();

const StackOptions = ({ height = 0, ...otherProps } = {}) => ({
  headerTitleAlign: "center",
  headerTitle: () => <Header />,
  headerLeft: () => <View />,
  headerRight: () => <View />,
  headerStyle: {
    height,
  },
  cardStyle: { backgroundColor: "#FFFFFF" },
  ...otherProps,
});

const Navigation = () => {
  const isLoading = User.isLoading();
  const loggedIn = User.loggedIn();
  const getCurrentUser = User.getCurrentUser();

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Stack.Screen
            name="home"
            component={HomeNagivation}
            options={({ navigation }) =>
              StackOptions({
                displayMenuIcon: true,
                navigation,
              })
            }
          />
        ) : (
          <Stack.Screen
            name="login"
            component={LoginRegisterNavigator}
            options={({ navigation }) => StackOptions({ height: 0, navigation })}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
