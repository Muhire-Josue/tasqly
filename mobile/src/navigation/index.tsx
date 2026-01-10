import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/splash";
import SignUp from "../screens/auth/signup";
import SignIn from "../screens/auth/signin";
import ResetPassword from "../screens/auth/reset-password";
import OtpCode from "../screens/auth/otp-code";

import TaskList from "../screens/tasks/list";
import CreateTask from "../screens/tasks/create";
import TaskDetails from "../screens/tasks/details";
import EditTask from "../screens/tasks/edit";
import RepairDetails from "../screens/repairs/details";
import CreateRepair from "../screens/repairs/create";
import EditRepair from "../screens/repairs/edit";
import Notification from "../screens/notifications";
import NoNotification from "../screens/notifications/no-content";
import Profile from "../screens/profile";
import HouseSettings from "../screens/house";
import JoinHouse from "../screens/house/join";
import JoinHouseSuccess from "../screens/house/join/JoinHouseSuccess";
import CreateHouse from "../screens/house/create";

import RepairList from "../screens/repairs/list";

import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen
          name="otp-code"
          component={OtpCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="task-list"
          component={TaskList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="create-task"
          component={CreateTask}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="task-details"
          component={TaskDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="edit-task"
          component={EditTask}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="create-repair"
          component={CreateRepair}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="repair-list"
          component={RepairList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="repair-details"
          component={RepairDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="edit-repair"
          component={EditRepair}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="no-notification"
          component={NoNotification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="house-settings"
          component={HouseSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="join-house"
          component={JoinHouse}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="join-house-success"
          component={JoinHouseSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="create-house"
          component={CreateHouse}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
