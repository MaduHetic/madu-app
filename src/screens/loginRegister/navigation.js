import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogInRegister from "./index";
import SignIn from "./signIn";

const Stack = createStackNavigator();

const LoginRegisterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"signInUp"} component={LogInRegister} />
      <Stack.Screen name={"signIn"} component={SignIn} />
    </Stack.Navigator>
  );
};

export default LoginRegisterNavigator;
