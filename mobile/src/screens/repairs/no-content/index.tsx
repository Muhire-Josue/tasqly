import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

type Props = {
  onAddRepair?: () => void;
};

const NoRepairs: React.FC<Props> = ({ onAddRepair }) => {
  return (
    <View style={styles.noContentWrap}>
      <View style={styles.noContentIconCircle}>
        <Ionicons name="hammer-outline" size={64} color="#FFFFFF" />
      </View>

      <Text style={styles.noContentTitle}>No Repair to show</Text>
      <Text style={styles.noContentSubtitle}>
        Check back later or create a new repair request.
      </Text>

      <Pressable
        onPress={onAddRepair}
        style={({ pressed }) => [
          styles.noContentButton,
          pressed && { opacity: 0.9 },
        ]}
      >
        <Ionicons name="add" size={22} color="#FFFFFF" />
        <Text style={styles.noContentButtonText}>Add Repair</Text>
      </Pressable>
    </View>
  );
};

export default NoRepairs;
