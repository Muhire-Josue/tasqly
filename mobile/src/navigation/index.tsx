import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash";
import SignUp from "../screens/auth/signup";
import SignIn from "../screens/auth/signin";
import ResetPassword from "../screens/auth/reset-password";

const Stack = createNativeStackNavigator();

const BgColorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F6FBFC",
  },
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer theme={BgColorTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="reset-password"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
