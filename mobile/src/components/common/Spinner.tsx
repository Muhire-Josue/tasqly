import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner: React.FC = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#fffff" />
    </View>
  );
};
export default Spinner;
