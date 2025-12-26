import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "react-native";
import styles from "../style/stats";

const Stats: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Pending */}
      <View style={styles.statBox}>
        <View style={styles.rowCenter}>
          <FontAwesome5 name="clock" size={20} color="#FFD166" />
          <Text style={styles.statLabel}> Pending</Text>
        </View>
        <Text style={styles.statValue}>26</Text>
      </View>

      {/* Rejected */}
      <View style={styles.statBox}>
        <View style={styles.rowCenter}>
          <FontAwesome5 name="times-circle" size={20} color="#E63946" />
          <Text style={styles.statLabel}> Rejected</Text>
        </View>
        <Text style={styles.statValue}>13</Text>
      </View>

      {/* Completed */}
      <View style={styles.statBox}>
        <View style={styles.rowCenter}>
          <FontAwesome5 name="check-circle" size={20} color="#32DE84" />
          <Text style={styles.statLabel}> Completed</Text>
        </View>
        <Text style={styles.statValue}>55</Text>
      </View>
    </View>
  );
};

export default Stats;
