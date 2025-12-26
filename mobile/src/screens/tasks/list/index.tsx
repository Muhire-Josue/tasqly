import React from "react";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import ben from "../../../assets/ben.jpg";
import Stats from "../../../components/common/Stats";

const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.userRow}>
          <Image source={ben} style={styles.avatar} />
          <Text style={styles.greetingText}>Hi John</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
        >
          <Ionicons name="add" size={36} color="#000" />
        </Pressable>
      </View>
      <View style={styles.homeRow}>
        <FontAwesome name="home" size={30} color="#000" />
        <Text style={styles.homeText}>The Smith&apos;s Home</Text>
      </View>
      <Stats />
    </View>
  );
};

export default TaskList;
