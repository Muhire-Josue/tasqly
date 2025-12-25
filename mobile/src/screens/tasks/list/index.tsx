import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import ben from "../../../assets/ben.jpg";

const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image source={ben} style={styles.avatar} />

        <Text style={styles.greetingText}>Hi John</Text>
      </View>
    </View>
  );
};

export default TaskList;
