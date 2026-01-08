import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style/spinner";

interface SpinnerProps {
  color: string;
}

const Spinner: React.FC<SpinnerProps> = ({ color }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};
export default Spinner;
