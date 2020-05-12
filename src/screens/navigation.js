import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

import { User } from "@core/user";
import SignIn from "./signIn";
import HomeNagivation from "./homeNavigation";

const Stack = createStackNavigator();

const StackOptions = ({ height = 0, ...otherProps } = {}) => ({
  headerTitleAlign: "center",
  headerTitle: () => <View />,
  headerLeft: () => <View />,
  headerRight: () => <View />,
  headerStyle: {
    height,
  },
  ...otherProps,
});

const Navigation = () => {
  const loggedIn = User.loggedIn();
  useEffect(() => {
    if (loggedIn) {
      SplashScreen.hide();
    }
  }, [loggedIn]);

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
            component={SignIn}
            options={({ navigation }) => StackOptions({ height: 180, navigation })}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
