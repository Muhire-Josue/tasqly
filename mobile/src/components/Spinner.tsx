import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style/spinner";

const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
};
export default Spinner;
