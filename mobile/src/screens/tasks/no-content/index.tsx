import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import styles from "./styles";

interface NoTasksProps {
  onAddTask: () => void;
}

const NoTasks: React.FC<NoTasksProps> = ({ onAddTask }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.iconCircle}>
        <FontAwesome6 name="list-check" size={64} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>No tasks to show</Text>
      <Text style={styles.subtitle}>
        Check back later or create a new task.
      </Text>

      <Pressable
        onPress={onAddTask}
        style={({ pressed }) => [
          styles.cta,
          pressed && { opacity: 0.9, transform: [{ scale: 0.99 }] },
        ]}
      >
        <FontAwesome6 name="plus" size={22} color="#FFFFFF" />
        <Text style={styles.ctaText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default NoTasks;
