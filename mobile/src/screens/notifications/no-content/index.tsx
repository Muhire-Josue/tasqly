import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const NotificationEmptyState: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="notifications-outline" size={96} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>
        You’re all caught up <Text style={styles.emoji}>🎉</Text>
      </Text>
    </View>
  );
};

export default NotificationEmptyState;
