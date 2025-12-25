import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const OtpCode: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>Enter the code sent to your email</Text>
      <Text style={styles.emailTitle}>email@example.com</Text>
    </View>
  );
};

export default OtpCode;
