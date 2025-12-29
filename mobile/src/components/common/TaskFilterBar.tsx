// src/components/common/TaskFilterBar.tsx
import React, { useRef } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../style/taskFilterBar";
import { TaskStatus } from "../../types/tasks";

export type Scope = "all" | "mine";

export interface TaskFilterBarProps {
  scope: Scope;
  onScopeChange: (scope: Scope) => void;
  selectedStatuses: TaskStatus[];
  onToggleStatus: (status: TaskStatus) => void;
  // NEW: let parent know where the icon is on screen
  onFilterIconMeasured: (pageY: number, height: number) => void;
}

const TaskFilterBar: React.FC<TaskFilterBarProps> = ({
  scope,
  onScopeChange,
  onFilterIconMeasured,
}) => {
  const iconRef = useRef<View>(null);

  const handleFilterPress = () => {
    iconRef.current?.measureInWindow((_x, y, _w, h) => {
      onFilterIconMeasured(y, h);
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.filterRow}>
        <View style={styles.filterChips}>
          <Pressable
            onPress={() => onScopeChange("all")}
            style={[
              styles.filterChip,
              scope === "all" && styles.filterChipActive,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                scope === "all" && styles.filterChipTextActive,
              ]}
            >
              All
            </Text>
          </Pressable>

          <Pressable
            onPress={() => onScopeChange("mine")}
            style={[
              styles.filterChip,
              scope === "mine" && styles.filterChipActive,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                scope === "mine" && styles.filterChipTextActive,
              ]}
            >
              For Me
            </Text>
          </Pressable>
        </View>

        <View ref={iconRef}>
          <Pressable style={styles.filterIcon} onPress={handleFilterPress}>
            <Ionicons name="filter-outline" size={30} color="#000" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TaskFilterBar;
